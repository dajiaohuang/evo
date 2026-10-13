## 这条蝌蚪记录采用什么来源名称？ {#s-cc2f6315fe}
这条记录展示 TadpoleTraits 如何归档 Amerana sierrae 的蝌蚪。第 4 版按数据集作者所录分类依据 Amphibian Species of the World 6.2 (2024)，将记录归在 Amerana sierrae、Amerana、Ranidae 下。文献表没有数据行。图像测量表：第 55 行的 Species 字段为 Rana sierrae，Species (ASTW) 字段分配为 Amerana sierrae。该数据集到 COL26.8 的概念映射标为“尚未解决”，因此这些行名并不能确定当前物种身份。

## 数据行实际记录了什么？ {#s-01cbd3ae2c}
TadpoleTraits 第 4 版（工作簿日期 2025.4.21）为这一来源记录保留 0 条文献行和 1 条图像测量行。没有文献行；本条只有图像表中的测量记录。图像表 Stage 字段的值为 36（第 55 行）；Type 字段为 Measurement（测量），图像类型为 彩色图像。这些是来源表中的行，不是去重蝌蚪数量。TadpoleTraits 的 readme 未确认绝对尺寸的单位，因此不据此推断身体大小。

## 图像测量能说明什么？ {#s-c4e71f6e3c}
图像测量行支持以下来源比例：尾长/全长 = 0.686000（图像行 55，阶段 36，彩色图像）。每个数值只描述对应图像行，不代表物种总体估计。

## 哪些来源比例存在差异？ {#s-3db8f6029f}
图像行 55 中有 6 个来源比例单元格与同一行分子除以全长所得商不一致，涉及字段 BL/TL，BMH/TL，MTH/TL，TMH/TL，DFH/TL，VFH/TL。原始值仍保留在证据记录中；不替换为校正值，也不把这些单元格作为比例结论。

