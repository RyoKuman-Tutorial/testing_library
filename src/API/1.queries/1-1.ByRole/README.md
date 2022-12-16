# BYROLE

## PARAMETERS

- container ( HTMLElemnet )
- role ( TextMatch )
- options?: {
  exact?: boolean = true,
  hidden?: boolean = false,
  name?: TextMatch,
  description?: TextMatch,
  normalizer?: NormalizerFn,
  selected?: boolean,
  checked?: boolean,
  pressed?: boolean,
  current?: boolean | string,
  expanded?: boolean,
  queryFallbacks?: boolean,
  level?: number,
  }

## 예제 전체 코드

**[ByRole.tsx](./ByRole.tsx)**<br/>
**[ByRole.test.tsx](./ByRole.test.tsx)**<br/>

## CONTAINER

screen 사용 시에 생략이 가능하다. <br/>
전달받은 HTMLElement 의 내부에서 해당하는 element 를 특정한다. <br/>

```tsx
const div1 = screen.getByRole("div1"); // div1
const div1H1 = getByRole(div1, "heading"); // div1 의 내부에 있는 h 태그 검색
expect(div1H1.innerHTML).toBe("div1H1");

const div2 = screen.getByRole("div2"); // div2
const div2H1 = getByRole(div2, "heading"); // div2 의 내부에 있는 h 태그 검색
expect(div2H1.innerHTML).toBe("div2H1");
```

divH1, divH2 둘다 h1 이지만, 검색 범위가 다르기에 에러가 발생하지 않았다. <br/>
screen 사용할 시에, h 태그가 두개 이상이기에 에러가 발생한다. <br/>

## ROLE

[TextMatch]() 를 사용하며 <br/>
전달받은 role에 해당하는 element 를 특정한다. <br/>
role 의 종류는 [링크](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles) 를 참고한다. <br/>

```tsx
const button: HTMLInputElement = screen.getByRole("button"); // button 요소 검색
const textInput: HTMLInputElement = screen.getByRole("textbox"); // textbox 요소 검색

expect(button.value).toBe("button");
expect(textInput.placeholder).toBe("textInput");
```

각각 버튼과 textbox 요소를 검색한다. role이 다르므로 에러가 나타나지 않는다.

## OPTIONS

### 1. exact

기본값은 true 이다. <br/>
false 사용 시에, 완전히 같지 않은 요소를 검색 가능하다.<br/>

```tsx
const text = screen.getByRole("pp", { exact: false });
expect(text.innerHTML).toBe("p tag");
// exact 가 false 이므로 ppp 가 아닌 pp 만 검색해도 잘 작동함
```

### 2. level

h 태그처럼 레벨이 있는 경우에 사용 가능하다 <br/>

```tsx
const div5 = screen.getByRole("div5"); // div5
const div5H1 = getByRole(div5, "heading", { level: 1 }); // h1
const div5H2 = getByRole(div5, "heading", { level: 2 }); // h2
const div5H3 = getByRole(div5, "heading", { level: 3 }); // h3
const div5H4 = getByRole(div5, "heading", { level: 4 }); // h4
expect(div5H1.innerHTML).toBe("h1");
expect(div5H2.innerHTML).toBe("h2");
expect(div5H3.innerHTML).toBe("h3");
expect(div5H4.innerHTML).toBe("h4");
```
