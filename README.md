# Hexagon - Web3 App Starter Kit

# Getting Started

nodeJs：使用 .nvmrc 文件进行管理，版本为 v20.10.0 , 建议使用 fnm 作为版本管理

依赖包管理：必须使用 pnpm，版本为 8.x

### Use

```bash
pnpm create next-app -e https://github.com/Pony-Unicorn/web3-framework
```

```bash
pnpm install
```

#### Development

```bash
pnpm dev
```

#### Build

```bash
pnpm build
```

### Web3 Core

- [WAGMI CLI](https://wagmi.sh/cli/getting-started) - Automatic React Hook Generation
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection manager

### Web2 Frameworks

- [Vercel](https://vercel.com/) - App Infrastructure
- [Prisma](https://www.prisma.io/) - Database ORM

### Developer Experience

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### User Interface

- [TailwindCSS](https://tailwindcss.com) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://www.framer.com/motion/) – Motion library for React to animate components with ease
- [React Icons](https://react-icons.github.io/react-icons) – Beautifully simple, pixel-perfect icons
- [shadcn-ui-theme-generator](https://gradient.page/tools/shadcn-ui-theme-generator) - theme generator

The [ui.shadcn.com](https://ui.shadcn.com) components are included in the `/components/ui` folder.

### 目录结构

### 命名：

- 组件名字使用大驼峰，组件的文件名使用连字符
- 基础变量使用匈牙利命名规范，变量名 = 前缀(类型) + 描述(首字母大写)。例如 const iMyAge: number = 18

| 前缀 | 描述                 |
| :--- | :------------------- |
| a    | 数组 Array           |
| b    | 布尔值 Boolean       |
| cr   | 颜色参考值 Color Ref |
| fn   | 函数 Function        |
| h    | 句柄 Handle          |
| i    | 整形 Int             |
| s    | 字符串 String        |

### Color

- background 背景色
- foreground 前景色
- popover 弹出窗色
- card 卡片色
- border 边框色
- input 输入框色
- muted 柔和色
- primary 重要色
- secondary 次要色
- accent 强调色
- destructive 警告、破坏性的
- ring

### Todo

- [ ] 布局组件 flex、box、grid
- [ ] 面板弹窗管理
- [ ] RainbowKit 主题设定
- [ ] 同步代码工具 npx code pull
