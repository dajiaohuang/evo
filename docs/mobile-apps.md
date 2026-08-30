# Android 与 iOS 应用

Evo Atlas 的 Web、Android 和 iOS 版本共享同一个 React/TypeScript 客户端。原生应用把 HTML、CSS、JavaScript、图标、启动资源和当前不可变科学数据发布版一并装入安装包，不把 Web 站点作为远程首页加载；Web 版仍从 GitHub Pages 读取同一份发布协议。

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

移动构建关闭 Vite 的默认 `publicDir` 复制，先用 canonical `data/` 生成当前发布版，再由现有 `release-files.json` 选择全部交互文件并复制到 `dist-mobile/data/`。重复的 24 个资源包 ZIP 导出物不再复制，因为其科学内容已经作为交互文件内置。finalizer 会沿用发布清单的字节数与 SHA-256 逐项核对，拒绝缺失、串版或超过 650 MiB 的产物；这是一条构建契约，不是新的科学内容审查系统。

应用 ID 是 `io.github.dajiaohuang.evoatlas`。Android 最低 API 为 24，iOS 最低版本为 15。原生工程使用 Capacitor 8；iOS 插件通过 Swift Package Manager 引入。

仓库中的 Android Studio 与 Xcode 项目是可复现的原生壳源工程，不是商店发布证明。应用级 Android/iOS 测试源随工程维护，但 AAB、IPA、签名 Archive、Play Console 和 App Store Connect 发布物均不在仓库中；只有在相应平台工具链、模拟器/真机和商店流程完成后才能声称原生版本已发布。

## 数据与离线边界

移动构建通过 `.env.mobile` 将数据根设置为：

```text
./data/
```

客户端先从应用资源读取 `current.json`，再读取 `releases/<datasetVersion>/` 下的不可变数据。清单和分片仍经过现有 SHA-256 与版本一致性检查。Android、iOS 与 Web 不存在内容白名单或精简版数据注册表：三端都能访问 Core、24 个富内容资源包、7 个静态命名资源包、全局化石、全部 1,889 个 CAO2024 几何帧、44,175 条 CAO2024 观测/约束点和完整 COL 名录。七个命名包的 14 个分片覆盖此前残余的 363,160 个严格接受种；它们与 Web 使用相同的字节和校验和，并保持“命名覆盖不等于逐物种档案”的边界。

原生“数据”页直接显示安装包内置的文件数与体积，不再提供把同一数据重复写入 WebView Cache Storage 的按钮。当前 rc56 交互集继续包含 rc54 的完整 PBDB、CAO2024 与 COL26.8 字节，并把 24 份来源限定研究预设作为独立、带校验和的包文件纳入发布清单；七个命名包清单、14 个物种分片和共享来源账本也自动纳入。精确文件数与体积由构建时发布清单计算并显示，不写死到客户端代码。浏览器版对富内容包保留单包与全包缓存，对命名包提供逐包离线保存和 ZIP 下载，并继续提供“保存完整图谱”。

原生应用安装后即可在断网状态读取当前内置发布版，杀进程重启也不依赖缓存配额。升级应用会替换内置数据版本；在线外部 DOI、来源站点和用户主动打开的链接仍需要网络。Web 新数据版本发布后仍需重新保存对应版本，旧版本缓存可在“数据”页清除。

原生构建固定使用相对数据根 `./data/`；Web 发布根由 Vite 的 `/evo/` 基址决定。不要在 Java/Kotlin/Swift 代码中复制数据 URL。

## 准备环境

所有平台都需要 Node.js 22+：

```bash
npm ci
npm run mobile:doctor
```

Android 构建还需要 Android Studio 2025.2.1+、JDK 21 和 Android SDK 36。iOS 构建必须在 macOS 上使用 Xcode 26+；首次打开工程后在 Signing & Capabilities 中选择开发团队。

## 构建与同步

生成完整移动应用资源：

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
3. Android 分别在 API 24 与当前目标 API 的模拟器/真机检查首次教程、综合看板、返回键、深链和外链；关闭网络、杀进程后重开地图、名录、故事、化石、富内容包和七个命名资源包。
4. iOS 分别在 iPhone、带刘海设备和 iPad 检查安全区、旋转、深链和外链；关闭网络、杀进程后重开同一组完整数据视图，并抽查命名包记录数与来源入口。
5. 检查应用版本、Android `versionCode`、iOS `CURRENT_PROJECT_VERSION`、隐私说明、商店截图和签名配置。
6. 以发布模式生成 AAB/Archive，检查安装包不包含签名私钥、令牌、开发服务器地址或未授权第三方资产。

仓库只维护可复现的应用工程，不存放商店签名、App Store Connect/Play Console 凭据，也不声称未经真机与商店审核的版本已经发布。
