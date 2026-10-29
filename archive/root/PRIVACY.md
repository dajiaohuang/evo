# Evo Atlas 隐私说明

最后更新：2026-08-30

Evo Atlas 是一个静态优先、无需账号的开源科学探索器。项目没有广告、分析 SDK、用户画像、应用后端或自建用户数据库。

## 保存在设备上的信息

以下信息仅保存在当前浏览器或安装应用的本地存储中：

- 首次教程和界面偏好；
- 已缓存的应用资源与科学数据；
- 收藏、笔记、故事草稿和查询历史；
- 用户主动导入的 CSV、JSON、GeoJSON 或其他受支持研究文件。

导入文件在设备内处理。Evo Atlas 不会把这些文件上传到项目维护者控制的服务器。卸载应用、清除站点数据或使用应用内相应清理功能会移除这些本地数据；清除前请自行导出需要保留的内容。

## 网络请求

应用会为下列目的访问网络：

- 从 `dajiaohuang.github.io/evo` 获取公开、版本化并带校验和的应用和科学数据；
- 打开用户主动选择的 DOI、论文、数据来源、许可证或其他外部链接；
- 在用户明确使用相关功能时访问所显示的第三方公开服务。

这些站点和服务可能按各自政策记录 IP 地址、请求时间、User-Agent 或其他常规服务器日志。其处理方式不由 Evo Atlas 控制，请查看相应服务的隐私政策。

## 设备权限

当前移动应用不要求位置、相机、麦克风、通讯录、照片库、蓝牙、健康或广告跟踪权限。Android 声明互联网权限用于读取公开数据。若未来功能需要新的敏感权限，必须在代码、商店说明和本文件中明确说明用途，并在操作系统层由用户决定是否授权。

## 儿童、销售与共享

项目不建立用户身份，不出售个人信息，也不向广告商共享个人信息。由于项目不接收账号资料，维护者无法从应用中识别、访问或导出某位用户的本地笔记和导入文件。

## 反馈

隐私问题、数据清理问题或对网络行为的疑问，请在 [GitHub Issues](https://github.com/dajiaohuang/evo/issues) 提交，并避免在公开 issue 中附上个人敏感信息或未公开研究数据。

英文摘要：Evo Atlas has no account system, advertising, analytics SDK, profiling backend or project-operated user database. Preferences, cached data, notes and imports stay on the device. Network access is used to fetch public versioned data and to open links selected by the user.
