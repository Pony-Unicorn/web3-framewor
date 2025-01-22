# Hexagon - Web3 App Starter Kit

# Getting Started

nodeJs：使用 .nvmrc 文件进行管理，版本为 lts/iron , 建议使用 fnm 作为版本管理

依赖包管理：必须使用 pnpm，版本为 9.1.4

### Use

```bash
npx degit Pony-Unicorn/web3-framework my-project

cd my-project

pnpm install
```

#### Development

```bash
pnpm dev
```

### 编码规范

- [参考](https://www.yuque.com/pony13500815917/computer/1556e1e356e8b8d24ea1540304921f61)

### Core Dependencies

- [Wagmi](https://wagmi.sh/) - Wagmi Reactivity for Ethereum apps
- [viem](https://viem.sh/) - Ethereum library
- [@reown/appkit](https://docs.reown.com/appkit/next/core/installation) - Wallet connection manager
- zustand 其实也许在 nextjs 中你真的不需要状态管理

### User Interface

- [TailwindCSS](https://tailwindcss.com) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [ui.shadcn.com](https://ui.shadcn.com) components are included in the `/components/ui` folder
- [lucide](https://lucide.dev/) – Beautiful & consistent icons Made by the community.
- [Framer Motion](https://www.framer.com/motion/) – Motion library for React to animate components with ease
- [字体动画参考](https://variantvault.chrisabdo.dev/text-variants)
- [shadcn-ui-theme-generator](https://gradient.page/tools/shadcn-ui-theme-generator) - theme generator

### Developer Experience

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
- [AssetPack](https://github.com/pixijs/assetpack/tree/main/) – AssetPack is a tool for optimising assets for the web. It can be used to transform, combine, compress assets. Any asset that you want to transform or optimise into something else can be done with AssetPack.

### AI Editor cursor rules

- [参考 1](https://gist.github.com/Shpigford/b3c2abe5e631f3edc4eac919ed31eaeb)
- [参考 2](https://github.com/PatrickJS/awesome-cursorrules)

### 目录结构

### Todo

- [ ] 布局组件 flex、box、grid
- [ ] 面板弹窗管理
- [ ] 框架优化
  - [ ] 合约调用返回错误，框架中没有友好的提示 viem 的错误处理
    - console.log("error message >>>", error?.message.split("\n")[2])

### bug

- 运行时控制台 Unable to find `next-intl` locale because the middleware didn't run on this request. See https://next-intl-docs.vercel.app/docs/routing/middleware#unable-to-find-locale. The `notFound()` function will be called as a result. 错误处理

### 多语言注意事项

- 配置多语言后，需要使用src/navigation 中的 Link, redirect, usePathname, useRouter

### 待处理

- [ ] 检查 lu icon 无效的
- [ ] 合约：获取地址、获取链id、读取合约、写合约
- [ ] 更新 pnpm
- [ ] 升级依赖到最新版
