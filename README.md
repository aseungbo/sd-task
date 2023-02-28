![main](https://user-images.githubusercontent.com/46778769/221996063-de62d1e7-73e0-4495-a5f9-6c2d1021141c.gif)

# 게시판 CRUD 구현

<div>
   <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
   <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
   <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
   <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
   <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
   <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
   <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/>

</div>

## Description

- 프론트엔드 사전 과제로 진행된 프로젝트입니다.

- [json-server](https://github.com/typicode/json-server) 기반의 백엔드 서버를 활용하여 게시판을 구현합니다.
- [Next.js 13 버전](https://nextjs.org/docs)의 `appDir Structure`, `Data fetching`, `Page routing` 등 기존의 React 기능들이 Next.js에서 어떤 방식으로 동작하는 지 학습하고, 이를 통해 요구사항에 맞춰 서비스를 구현하였습니다.

## Features

- 게시글 목록 확인 및 새 게시글을 `작성`할 수 있습니다.
- 게시글을 `수정` 및 `삭제`할 수 있습니다.
- 댓글을 `수정` 및 `삭제`할 수 있습니다.
- 페이지와 한 번에 확인하고 싶은 게시글의 수를 조절할 수 있습니다.

## Installation

- Node.js v18.12.1 (권장)

```
npm install -g pnpm
pnpm install
```

## Usage

```
pnpm run dev
```

- [http://localhost:3001](http://localhost:3001)
- Concurrently을 통해 별도의 설정없이 프론트엔드와 백엔드 개발 서버를 동시에 실행

## Folder Structure

```
├── README.md
├── app
│   ├── (post)
│   │   ├── detail
│   │   │   └── [slug]
│   │   │   ├── head.tsx
│   │   │   └── page.tsx
│   │   └── write
│   │   ├── head.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── head.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── atoms
│   │   ├── buttons
│   │   │   └── BaseButton.tsx
│   │   └── inputs
│   │   ├── InputInstance.tsx
│   │   └── TextAreaInstance.tsx
│   ├── organisms
│   │   ├── CommentCard.tsx
│   │   ├── CommentForm.tsx
│   │   ├── DetailCard.tsx
│   │   ├── Filter.tsx
│   │   ├── Pagination.tsx
│   │   ├── PostCard.tsx
│   │   ├── ReplyCard.tsx
│   │   ├── Spinner.tsx
│   │   ├── ViewLimitBox.tsx
│   │   └── WriteForm.tsx
│   └── templates
│   ├── CommentTemplate.tsx
│   ├── Detail.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Main.tsx
│   └── Write.tsx
├── db.json
├── hooks
│   ├── useComments.ts
│   ├── usePosts.ts
│   └── useValidPassword.ts
├── networks
│   ├── axios.custom.ts
│   └── axios.instance.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   └── api
│   └── hello.ts
├── pnpm-lock.yaml
├── public
│   └── favicon.ico
├── server.js
├── tree.txt
├── tsconfig.json
└── types
├── dto
│   └── dataType.dto.ts
└── enum
└── policy.ts
```

- `Atomic Design Pattern`을 적용하여 컴포넌트를 역할에 맞게 분리하였습니다.
  - `Atom` : 최소 단위의 UI 컴포넌트
  - `Organism` : Atom들을 조합하여 Card, Form과 같이 역할이 부여된 컴포넌트
  - `Template`: Organism을 배치하여 레이아웃을 구성하는 컴포넌트
- `appDir`를 활용하여, 모든 페이지에 공통 `layout`을 구성하고, `SEO`를 적용하기 위한 각 페이지별 `head`를 사용합니다.
