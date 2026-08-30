# Android 与 iOS 应用

Evo Atlas 的 Web、Android 和 iOS 版本共享同一个 React/TypeScript 客户端。原生应用会把 HTML、CSS、JavaScript、图标和启动资源装入安装包；体积较大的版本化科学数据继续从公开 GitHub Pages 端点按需读取，不把 Web 站点作为远程首页加载。

## 工程结构

```text
src/                         # Web 与移动端共享的产品代码
src/platform/nativeRuntime.ts # 深链、返回键、状态栏、启动屏和外链
capacitor.config.ts          # Capacitor 应用与插件配置
.env.mobile                  # 移动构建的数据根地址和运行标志
android/                     # Android Studio / Gradle 工程
ios/                         # Xcode / Swift Package Manager 工程
assets/logo.svg              # 原生图标和启动图源文件
dist-mobile/                 # 临时生成的移动客户端壳，不提交
```

应用 ID 是 `io.github.dajiaohuang.evoatlas`。Android 最低 API 为 24，iOS 最低版本为 15。原生工程使用 Capacitor 8；iOS 插件通过 Swift Package Manager 引入。

## 数据与离线边界

移动构建通过 `.env.mobile` 将数据根设置为：

```text
https://dajiaohuang.github.io/evo/data/
```

客户端先读取 `current.json`，再读取 `releases/<datasetVersion>/` 下的不可变数据。清单和分片仍经过现有 SHA-256 与版本一致性检查。已经读取的资源可使用现有缓存；首次打开尚未缓存的地图帧、名录分片、化石分片或资源包时需要网络。

更换生产数据端点时修改 `VITE_DATA_ROOT`，不要在原生 Java/Kotlin/Swift 代码中复制数据 URL。

## 准备环境

所有平台都需要 Node.js 22+：

```bash
npm ci
npm run mobile:doctor
```

Android 构建还需要 Android Studio 2025.2.1+、JDK 21 和 Android SDK 36。iOS 构建必须在 macOS 上使用 Xcode 26+；首次打开工程后在 Signing & Capabilities 中选择开发团队。

## 构建与同步

只构建移动客户端壳：

```bash
npm run mobile:build
```

构建后同时同步 Android 与 iOS 原生工程：

```bash
npm run mobile:sync
```

打开 Android Studio：

```bash
npm run mobile:android
```

在 macOS 上打开 Xcode：

```bash
npm run mobile:ios
```

每次修改共享前端、Capacitor 配置或插件依赖后都要重新运行 `mobile:sync`。该命令会在 Capacitor 同步后自动把 Windows 生成的 Swift Package 本地路径规范化为 macOS 可读格式。不要手改 `android/app/src/main/assets/public/` 或 `ios/App/App/public/`；这些目录是同步生成物并已被忽略。

## 原生交互

- 自定义深链使用 `evoatlas://open/<route>`，查询参数会保留到共享哈希路由。
- 指向 Evo Atlas 正式站并带 `#/...` 的通用 URL 会在应用内转换为同一路由。
- 其他 HTTP(S) 链接交给系统浏览器，避免在应用 WebView 内伪装第三方站点。
- Android 返回键先返回应用历史，再回到综合看板；已经位于综合看板时退出应用。
- 顶栏、底部导航和主内容使用安全区变量，适配刘海、圆角和 Home Indicator。
- 状态栏和启动屏使用深色主题；应用可访问后主动隐藏启动屏。

示例：

```text
evoatlas://open/home
evoatlas://open/stories?id=angiosperm-evidence-boundaries
evoatlas://open/explore?age=375&taxon=tiktaalik
```

## 图标与启动资源

源图位于 `assets/logo.svg`。需要重做平台资源时，使用固定版本的生成器：

```bash
npx @capacitor/assets@3.0.5 generate --android --ios --assetPath assets
```

生成后检查 Android `res/`、iOS `Assets.xcassets/` 和启动图；不要提交生成器额外创建、但项目不使用的顶层输出。

## 发布前检查

1. 运行 `npm run typecheck`、`npm test`、`npm run mobile:build` 和 Web 的完整 `npm run verify`。
2. 运行 `npm run mobile:sync`，确认 Capacitor 插件和原生依赖同步成功。
3. Android 分别在 API 24 与当前目标 API 的模拟器/真机检查首次教程、综合看板、返回键、深链、离线重开和外链。
4. iOS 分别在 iPhone、带刘海设备和 iPad 检查安全区、旋转、深链、离线重开和外链。
5. 检查应用版本、Android `versionCode`、iOS `CURRENT_PROJECT_VERSION`、隐私说明、商店截图和签名配置。
6. 以发布模式生成 AAB/Archive，检查安装包不包含签名私钥、令牌、开发服务器地址或未授权第三方资产。

仓库只维护可复现的应用工程，不存放商店签名、App Store Connect/Play Console 凭据，也不声称未经真机与商店审核的版本已经发布。
