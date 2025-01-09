# Employee Search

Использовались:
- Vue 3
- Vuex 4 (for Vue 3)
- [Fake api/mock](https://jsonplaceholder.typicode.com/)

В UserStore есть пагинация, для того чтобы случайно не отрендерить список в 2к юзеров, присутсвует поиск через запятую поэтому когда пишете 'a, o' у каждой буквы свой собственный лимит (помоему появится 7 юзеров). 
Поиск только на англ. яз. и чтобы избежать сильных мерцаний кастомный дебаунс. 
[Fake api](https://jsonplaceholder.typicode.com/) у меня не открываются без vpn, соответственно и ответ от их сервиса я не получал без vpn, так что если увидете карсный текст, то просто включите любой бесплатный vpn.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm serve
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
