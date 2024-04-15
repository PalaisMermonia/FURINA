---
outline: deep
---

# 设计规范

## 颜色 / Color

<script setup>
  import ColorPalette from '@/components/ColorPalette.vue'

  const textCn = "众水、众方、众民与众律法的女王";
  const textEn = "Reine des eaux, des gens, des peuples et des lois";

  const furinaBlueGroup = {
  token: "芙宁娜蓝 / Furina Blue",
  description: "芙宁娜蓝是 FURINA 的主色，用于品牌标识和主要操作元素。",
  primary: true,
  background: false,
  palettes: [
    {
      color: "#5A56BF",
      darkColor: "#807ACC",
      description: "常规",
      token: "furina-blue-6",
    },
    {
      color: "#756FCC",
      darkColor: "#5E5ABF",
      description: "悬浮",
      token: "furina-blue-5",
    },
    {
      color: "#3737A2",
      darkColor: "#9B94D9",
      description: "点击",
      token: "furina-blue-7",
    },
    {
      color: "#9189D9",
      darkColor: "#3737A2",
      description: "特殊场景",
      token: "furina-blue-4",
    },
    {
      color: "#AFA7E5",
      darkColor: "#1C2086",
      description: "一般禁用",
      token: "furina-blue-3",
    },
    {
      color: "#CDC6F2",
      darkColor: "#080F69",
      description: "文字禁用",
      token: "furina-blue-2",
    },
    {
      color: "#EDE8FF",
      darkColor: "#00084D",
      description: "浅色/白底悬浮",
      token: "furina-blue-1",
    },
  ]
};

  const grayGroup = {
  token: "灰度 / Gray",
  description: "灰度色卡包含了从纯黑到纯白共 9 个色阶。",
  palettes: [
    {
      color: "#000",
      description: "纯黑",
      token: "color-gray-9",
    },
    {
      color: "#141414",
      description: "8 度灰",
      token: "color-gray-8",
    },
    {
      color: "#242424",
      description: "14 度灰",
      token: "color-gray-7",
    },
    {
      color: "#404040",
      description: "25 度灰",
      token: "color-gray-6",
    },
    {
      color: "#7c7c7c",
      description: "49 度灰",
      token: "color-gray-5",
    },
    {
      color: "#c0c0c0",
      description: "75 度灰",
      token: "color-gray-4",
    },
    {
      color: "#dfdfdf",
      description: "87 度灰",
      token: "color-gray-3",
    },
    {
      color: "#f2f2f2",
      description: "95 度灰",
      token: "color-gray-2",
    },
    {
      color: "#fff",
      description: "纯白",
      token: "color-gray-1",
    },
  ]
};

const fillGroup = {
  token: "填充色 / Fill",
  description: "填充色用于非主要类型的图标填充，以及部分元素的背景填充。",
  palettes: [
    {
      color: "#616161",
      darkColor: "#4B4B4B",
      description: "强调/图标/特殊场景",
      token: "color-fill-5",
    },
    {
      color: "#818181",
      darkColor: "#828284",
      description: "重/特殊场景",
      token: "color-fill-4",
    },
    {
      color: "#c0c0c0",
      darkColor: "#474749",
      description: "深/灰底悬浮",
      token: "color-fill-3",
    },
    {
      color: "#dfdfdf",
      darkColor: "#414144",
      description: "一般/常规/白底悬浮",
      token: "color-fill-2",
    },
    {
      color: "#f2f2f2",
      darkColor: "#37373A",
      description: "浅/禁用",
      token: "color-fill-1",
    },
    {
      color: "#fff",
      darkColor: "#242424",
      description: "白色",
      token: "color-fill-base",
    },
  ]
};

const textGroup = {
  token: "文字 / Text",
  description: "用于文本内容的展示。",
  palettes: [
    {
      color: "#242424",
      darkColor: "#fff",
      description: "强调/正文标题",
      token: "color-text-5",
    },
    {
      color: "#505050",
      darkColor: "#B8B8B8",
      description: "次强调/正文标题",
      token: "color-text-4",
    },
    {
      color: "#7c7c7c",
      darkColor: "#8C8C8C",
      description: "次要信息",
      token: "color-text-3",
    },
    {
      color: "#bdbdbd",
      darkColor: "#8C8C8C",
      description: "置灰信息",
      token: "color-text-2",
    },
    {
      color: "#fff",
      darkColor: "#1C1C1E",
      description: "纯白文字",
      token: "color-text-1",
    },
  ]
};

const borderGroup = {
  token: "边框 / Border",
  description: "用于边框的颜色。",
  palettes: [
    {
      color: "#a0a0a0",
      darkColor: "#6B6B6B",
      description: "重/按钮描边",
      token: "color-border-4",
    },
    {
      color: "#b3b3b3",
      darkColor: "#575757",
      description: "深/悬浮",
      token: "color-border-3",
    },
    {
      color: "#ececec",
      darkColor: "#474749",
      description: "一般",
      token: "color-border-2",
    },
    {
      color: "#f2f2f2",
      darkColor: "#37373A",
      description: "浅",
      token: "color-border-1",
    },
  ]
};

const successGroup = {
  token: "成功 / Success",
  description: "用于成功、通过状态的提示。",
  palettes: [
    {
      color: "#00b42a",
      darkColor: "#8ED051",
      description: "常规",
      token: "color-success-6",
    },
    {
      color: "#88d045",
      darkColor: "#7AC43D",
      description: "悬浮",
      token: "color-success-5",
    },
    {
      color: "#53a618",
      darkColor: "#AADC74",
      description: "点击",
      token: "color-success-7",
    },
    {
      color: "#c0e790",
      darkColor: "#408814",
      description: "禁用",
      token: "color-success-3",
    },
    {
      color: "#dbf3ba",
      darkColor: "#296A07",
      description: "特殊场景",
      token: "color-success-2",
    },
    {
      color: "#f6ffe8",
      darkColor: "#184D00",
      description: "浅色背景",
      token: "color-success-1",
    },
  ]
};

const warningGroup = {
  token: "警告 / Warning",
  description: "主要用于警告、重点提醒、等待类色彩。",
  palettes: [
    {
      color: "#ffd700",
      darkColor: "#FF9626",
      description: "常规",
      token: "color-warning-6",
    },
    {
      color: "#FF9A2E",
      darkColor: "#FF8D1F",
      description: "悬浮",
      token: "color-warning-5",
    },
    {
      color: "#D25F00",
      darkColor: "#FFB357",
      description: "点击",
      token: "color-warning-7",
    },
    {
      color: "#FFCF8B",
      darkColor: "#A64B0A",
      description: "禁用",
      token: "color-warning-3",
    },
    {
      color: "#FFE4BA",
      darkColor: "#793004",
      description: "特殊场景",
      token: "color-warning-2",
    },
    {
      color: "#FFF7E8",
      darkColor: "#4D1B00",
      description: "浅色背景",
      token: "color-warning-1",
    },
  ]
};

const dangerGroup = {
  token: "错误 / Danger",
  description: "主要用于危险、错误、失败状态的提示。",
  palettes: [
    {
      color: "#E9583B",
      darkColor: "#ED7D60",
      description: "常规",
      token: "color-danger-6",
    },
    {
      color: "#ED795B",
      darkColor: "#E96449",
      description: "悬浮",
      token: "color-danger-5",
    },
    {
      color: "#C23A25",
      darkColor: "#F29B81",
      description: "点击",
      token: "color-danger-7",
    },
    {
      color: "#F6B79F",
      darkColor: "#9B2215",
      description: "禁用",
      token: "color-danger-3",
    },
    {
      color: "#FBD4C3",
      darkColor: "#740D05",
      description: "特殊场景",
      token: "color-danger-2",
    },
    {
      color: "#FFF0E8",
      darkColor: "#4D0300",
      description: "浅色背景",
      token: "color-danger-1",
    },
  ]
};
</script>

我们在不断尝试和调整的过程中总结出了一套适合 FURINA 的颜色体系，分为亮色和暗色两套色卡。你可以使用右上角的主题切换开关切换亮暗模式以对比两套色卡的差异。

::: tip
点击色号或色板可以复制当前色号的值到剪贴板；点击 token 可以复制当前色号 token 到剪贴板。
:::

### 主色 / Primary Color

<ClientOnly>
  <ColorPaletteGroup :group="furinaBlueGroup" />
</ClientOnly>

### 中性色 / Neutral Color

<ClientOnly>
  <ColorPaletteGroup :group="grayGroup" />
  <a-space />
  <ColorPaletteGroup :group="fillGroup" />
  <a-space />
  <ColorPaletteGroup :group="textGroup" />
  <a-space />
  <ColorPaletteGroup :group="borderGroup" />
</ClientOnly>

### 功能色 / Functional Color

<ClientOnly>
  <ColorPaletteGroup :group="successGroup" />
  <a-space />
  <ColorPaletteGroup :group="warningGroup" />
  <a-space />
  <ColorPaletteGroup :group="dangerGroup" />
</ClientOnly>

### 元素色 / Element Color

### 稀有度色 / Rarity Color

## 字体 / Typography

字体是体系化界面中最基本的构成之一。
用户通过文本来理解内容和完成工作，科学的字体系统能提升用户的阅读体验及工作效率。

FURINA 的视觉设计中对中文和英文字体进行了分别处理。中文段落使用 MiSans Regular，标题使用 MiSans Semibold。英文段落使用 Wix Madefor Text Regular，标题使用 Wix Madefor Display SemiBold。所有字体均为免费商用字体。

你可以参考下面的示例来了解 FURINA 的字体规范。

### 中文段落 / CJK Paragraph

中文段落使用的字体为 MiSans，字重为 Regular。相较于 OPPOSans，MiSans 的字形更加传统，留下了更多出脚；但是 OPPOSans 的字重选择过少，在 Regular 和 Bold 之中没有合适的过渡字重，因此本次设计使用了 MiSans。

<table class="w-full">
<tr>
  <th>字体展示</th>
  <th>字体规格</th>
  <th>语义化</th>
</tr>
<tr>
  <td style="font-size: 14px !important; line-height: 22px !important">{{textCn}}</td>
  <td>14/CN-Regular</td>
  <td>正文-小</td>
</tr>
<tr>
  <td style="font-size: 16px !important; line-height: 24px !important">{{textCn}}</td>
  <td>16/CN-Regular</td>
  <td>正文-中</td>
</tr>
<tr>
  <td style="font-size: 18px !important; line-height: 26px !important">{{textCn}}</td>
  <td>18/CN-Regular</td>
  <td>正文-大</td>
</tr>
<tr>
  <td style="font-size: 20px !important; line-height: 28px !important">{{textCn}}</td>
  <td>20/CN-Regular</td>
  <td>标题-小</td>
</tr>
<tr>
  <td style="font-size: 24px !important; line-height: 32px !important">{{textCn}}</td>
  <td>24/CN-Regular</td>
  <td>标题-中</td>
</tr>
<tr>
  <td style="font-size: 28px !important; line-height: 36px !important">{{textCn}}</td>
  <td>28/CN-Regular</td>
  <td>标题-大</td>
  </tr>
</table>

### 中文标题 / CJK Title

中文标题使用的字体为 MiSans，字重为 SemiBold。

<table class="w-full">
<tr>
<th>字体展示</th>
<th>字体规格</th>
<th>语义化</th>
</tr>
<tr>
  <td class="title" style="font-size: 14px !important; line-height: 22px !important">{{textCn}}</td>
  <td>14/CN-SemiBold</td>
  <td>正文-小</td>
</tr>
<tr>
  <td class="title" style="font-size: 16px !important; line-height: 24px !important">{{textCn}}</td>
  <td>16/CN-SemiBold</td>
  <td>正文-中</td>
</tr>
<tr>
  <td class="title" style="font-size: 18px !important; line-height: 26px !important">{{textCn}}</td>
  <td>18/CN-SemiBold</td>
  <td>正文-大</td>
</tr>
<tr>
  <td class="title" style="font-size: 20px !important; line-height: 28px !important">{{textCn}}</td>
  <td>20/CN-SemiBold</td>
  <td>标题-小</td>
</tr>
<tr>
  <td class="title" style="font-size: 24px !important; line-height: 32px !important">{{textCn}}</td>
  <td>24/CN-SemiBold</td>
  <td>标题-中</td>
</tr>
<tr>
  <td class="title" style="font-size: 28px !important; line-height: 36px !important">{{textCn}}</td>
  <td>28/CN-SemiBold</td>
  <td>标题-大</td>
</tr>
<tr>
<td class="title" style="font-size: 32px !important; line-height: 40px !important">{{textCn}}</td>
<td>32/CN-SemiBold</td>
<td>运营标题-小</td>
</tr>
<tr>
<td class="title" style="font-size: 48px !important; line-height: 56px !important">{{textCn}}</td>
<td>48/CN-SemiBold</td>
<td>运营标题-中</td>
</tr>
<tr>
<td class="title" style="font-size: 64px !important; line-height: 72px !important">{{textCn}}</td>
<td>64/CN-SemiBold</td>
<td>运营标题-大</td>
</tr>
</table>

### 英文段落 / English Paragraph

英文段落使用的字体为 Wix Madefor Text，字重为 Regular。Wix Madefor 是一款可变字体，可以根据设计需求调整字重。此外，与常见的 San Francisco 和 Roboto 不同，Wix Madefor 的字形更加圆润，更适合用于标题和大段文字。

FURINA 的界面语言以中文为主，因此在设计中适当放弃了英文的易读性，选择了更加适合标题和小段文字的 Wix Madefor。

<table class="w-full">
<tr>
<th>字体展示</th>
<th>字体规格</th>
<th>语义化</th>
</tr>
<tr>
  <td style="font-size: 14px !important; line-height: 22px !important">{{textEn}}</td>
  <td>14/EN-Regular</td>
  <td>正文-小</td>
</tr>
<tr>
  <td style="font-size: 16px !important; line-height: 24px !important">{{textEn}}</td>
  <td>16/EN-Regular</td>
  <td>正文-中</td>
</tr>
<tr>
  <td style="font-size: 18px !important; line-height: 26px !important">{{textEn}}</td>
  <td>18/EN-Regular</td>
  <td>正文-大</td>
</tr>
<tr>
  <td style="font-size: 20px !important; line-height: 28px !important">{{textEn}}</td>
  <td>20/EN-Regular</td>
  <td>标题-小</td>
</tr>
<tr>
  <td style="font-size: 24px !important; line-height: 32px !important">{{textEn}}</td>
  <td>24/EN-Regular</td>
  <td>标题-中</td>
</tr>
<tr>
  <td style="font-size: 28px !important; line-height: 36px !important">{{textEn}}</td>
  <td>28/EN-Regular</td>
  <td>标题-大</td>
</tr>
</table>

### 英文标题 / English Title

英文标题使用的字体为 Wix Madefor Display，字重为 Bold。

<table class="w-full">
<tr>
<th>字体展示</th>
<th>字体规格</th>
<th>语义化</th>
</tr>
<tr>
  <td class="title" style="font-size: 14px !important; line-height: 22px !important">{{textEn}}</td>
  <td>14/EN-Bold</td>
  <td>正文-小</td>
</tr>
<tr>
  <td class="title" style="font-size: 16px !important; line-height: 24px !important">{{textEn}}</td>
  <td>16/EN-Bold</td>
  <td>正文-中</td>
</tr>
<tr>
  <td class="title" style="font-size: 18px !important; line-height: 26px !important">{{textEn}}</td>
  <td>18/EN-Bold</td>
  <td>正文-大</td>
</tr>
<tr>
  <td class="title" style="font-size: 20px !important; line-height: 28px !important">{{textEn}}</td>
  <td>20/EN-Bold</td>
  <td>标题-小</td>
</tr>
<tr>
  <td class="title" style="font-size: 24px !important; line-height: 32px !important">{{textEn}}</td>
  <td>24/EN-Bold</td>
  <td>标题-中</td>
</tr>
<tr>
  <td class="title" style="font-size: 28px !important; line-height: 36px !important">{{textEn}}</td>
  <td>28/EN-Bold</td>
  <td>标题-大</td>
</tr>
<tr>
<td class="title" style="font-size: 32px !important; line-height: 40px !important">{{textEn}}</td>
<td>32/EN-Bold</td>
<td>运营标题-小</td>
</tr>
<tr>
<td class="title" style="font-size: 48px !important; line-height: 56px !important">{{textEn}}</td>
<td>48/EN-Bold</td>
<td>运营标题-中</td>
</tr>
<tr>
<td class="title" style="font-size: 64px !important; line-height: 72px !important">{{textEn}}</td>
<td>64/EN-Bold</td>
<td>运营标题-大</td>
</tr>
</table>
