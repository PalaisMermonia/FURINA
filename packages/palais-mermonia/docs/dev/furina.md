---
outline: deep
---

# 前端结构

FURINA 的前端使用 Vue 3 + Vite 构建，使用 TypeScript 编写。

FURINA 有以下页面：

- `genshin`：原神相关功能
  - `genshin/character/*`：显示角色数据
  - `genshin/abyss/*`：显示深渊数据
  - `genshin/material/*`：显示材料数据
  - `genshin/gacha/*`：显示模拟抽卡结果
- `starrail`: 崩坏：星穹铁道相关功能
  - `starrail/character/*`：显示角色数据
  - `starrail/gacha/*`：显示模拟抽卡结果
  - `starrail/abyss/*`：显示深渊/虚构叙事数据
- `zzz`：绝区零相关功能
  - `zzz/character/*`：显示角色数据
  - `zzz/gacha/*`：显示模拟抽卡结果
  - `zzz/material/*`：显示材料数据
  - `zzz/abyss/*`：显示深渊数据

## UI 设计稿

你可以在 [这个 MasterGo 设计稿](https://mastergo.com/goto/vGuyhLw5?page_id=M&file=111086002830316) 中访问 Furina 的全部页面 UI 设计稿。

## 设计规范

设计规范在设计稿中已经有所体现。

如果你不熟悉 MasterGo，可以在 [本文档的设计规范页面](./furina-design-guidelines) 查看可互动的设计规范，完成快速取色等功能。

## 开发规范

这些规范并不具有强制效力（甚至有时候我可能也会忘掉），不过如果可以的话，还是尽量遵守一下：

### 代码风格

- 使用 TypeScript 编写代码。
- 使用 2 个空格缩进。
- 使用双引号。
- 在每行结尾加上分号。虽然 JS 本身有 ASI，Vue 本身的代码规范也鼓励不加分号，但是为了代码的明确性建议加上。 ~~你不加有的是 `prettier` 加.jpg~~
- 使用小驼峰命名法。
- 使用 `const` 和 `let` 代替 `var`。虽然 `var` 到现在也不是不能用，硬抠 `var` 那点多出来的性能损耗对于现代浏览器来说也微不足道，但是为了代码的明确性还是建议使用 `const` 和 `let`。
- 使用 `===` 和 `!==` 代替 `==` 和 `!=`。JS 引擎会自动进行类型转换，而有时候这种类型转换会导致一些奇怪的问题，所以建议使用严格相等。性能什么的只是小问题，业务代码写都写不完了，不用在意这点小小八股。
- 使用 `import` 和 `export` 代替 `require` 和 `module.exports`。
- 尽量使用 `function` 声明函数。有的人喜欢使用箭头函数，但是箭头函数缺失一些特性，比如没有 `arguments` 对象，没有 `super` 对象，没有 `new.target` 对象，没有 `prototype` 对象，没有 `this` 对象（主要是这个），所以建议使用 `function` 声明函数。

### 文件名

- `*.vue` 文件名使用大驼峰命名法，如 `CharacterDetail.vue`。
- `*.ts` 文件名使用小驼峰命名法，如 `characterDetail.ts`。
- 类型文件名使用大驼峰命名法，如 `CharacterDetail.ts`。
- `*.{css,scss,sass,postcss}` 文件名使用 kebab-case 命名法，如 `character-detail.scss`。

### Vue SFC

- 除非你需要使用某些非 `setup` 特性，否则尽量使用 `<script setup>` 语法糖。
- 尽量使用 `defineProps` 和 `defineEmits` 代替 `props` 和 `emits`。
