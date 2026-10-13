## 这条蝌蚪记录采用什么来源名称？ {#s-6d1d015cab}
这条记录展示 TadpoleTraits 如何归档 Leptomantis cyanopunctatus 的蝌蚪。第 4 版按数据集作者所录分类依据 Amphibian Species of the World 6.2 (2024)，将记录归在 Leptomantis cyanopunctatus、Leptomantis、Rhacophoridae 下。文献表：第 4907 行的 Species 字段为 Rhacophorus cyanopunctatus，Species (ASTW) 字段分配为 Leptomantis cyanopunctatus。图像测量表：第 663 行的 Species 与 Species (ASTW) 字段均为 Leptomantis cyanopunctatus。该数据集到 COL26.8 的概念映射标为“尚未解决”，因此这些行名并不能确定当前物种身份。

## 数据行实际记录了什么？ {#s-8fbb9cd188}
TadpoleTraits 第 4 版（工作簿日期 2025.4.21）为这一来源记录保留 1 条文献行和 1 条图像测量行。文献表 Stage 字段的值为 37（第 4907 行）。1 条文献行的 Sample size 单元格均为空；空白不按零处理。图像表 Stage 字段的值为 uncertainty（不确定性标签）（第 663 行）；Type 字段为 Measurement（测量），图像类型为 手绘图。这些是来源表中的行，不是去重蝌蚪数量。TadpoleTraits 的 readme 未确认绝对尺寸的单位，因此不据此推断身体大小。

## 图像测量能说明什么？ {#s-bb691d7db3}
图像测量行支持以下来源比例：尾长/全长 = 0.688671（图像行 663，阶段 uncertainty（不确定性标签），手绘图）；躯体最大宽度/全长 = 0.171786（图像行 663，阶段 uncertainty（不确定性标签），手绘图）。每个数值只描述对应图像行，不代表物种总体估计。

## 哪些来源比例存在差异？ {#s-4a5e0bfcc7}
图像行 663 中有 2 个来源比例单元格与同一行分子除以全长所得商不一致，涉及字段 BL/TL，TMW/TL。原始值仍保留在证据记录中；不替换为校正值，也不把这些单元格作为比例结论。

