## 这条蝌蚪记录采用什么来源名称？ {#s-18665cfb25}
这条记录展示 TadpoleTraits 如何归档 Mantidactylus aerumnalis 的蝌蚪。第 4 版按数据集作者所录分类依据 Amphibian Species of the World 6.2 (2024)，将记录归在 Mantidactylus aerumnalis、Mantidactylus、Mantellidae 下。文献表：第 3356 行的 Species 与 Species (ASTW) 字段均为 Mantidactylus aerumnalis。图像测量表：第 1006 行的 Species 与 Species (ASTW) 字段均为 Mantidactylus aerumnalis。该数据集到 COL26.8 的概念映射标为“尚未解决”，因此这些行名并不能确定当前物种身份。

## 数据行实际记录了什么？ {#s-ea67d292ff}
TadpoleTraits 第 4 版（工作簿日期 2025.4.21）为这一来源记录保留 1 条文献行和 1 条图像测量行。文献表 Stage 字段的值为 40（第 3356 行）。1 条文献行的 Sample size 单元格均为空；空白不按零处理。图像表 Stage 字段的值为 27（按图片判断）（第 1006 行）；Type 字段为 Measurement（测量），图像类型为 彩色图像。这些是来源表中的行，不是去重蝌蚪数量。TadpoleTraits 的 readme 未确认绝对尺寸的单位，因此不据此推断身体大小。

## 图像测量能说明什么？ {#s-00a9c84246}
图像测量行支持以下来源比例：躯体长度/全长 = 0.345452（图像行 1006，阶段 27（按图片判断），彩色图像）；尾长/全长 = 0.661153（图像行 1006，阶段 27（按图片判断），彩色图像）；尾部最大高度/全长 = 0.173344（图像行 1006，阶段 27（按图片判断），彩色图像）；尾肌高度/全长 = 0.115968（图像行 1006，阶段 27（按图片判断），彩色图像）。每个数值只描述对应图像行，不代表物种总体估计。

## 哪些来源比例存在差异？ {#s-4378caac5c}
图像行 1006 中有 4 个来源比例单元格与同一行分子除以全长所得商不一致，涉及字段 BMH/TL，DFH/TL，VFH/TL，OD/TL。原始值仍保留在证据记录中；不替换为校正值，也不把这些单元格作为比例结论。

