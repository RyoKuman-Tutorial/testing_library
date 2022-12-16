# BYLABELTEXT

## PARAMETERS

- container ( HTMLElemnet )
- text( TextMatch ),
- options?: {
  selector?: string = '\*',
  exact?: boolean = true,
  normalizer?: NormalizerFn,
  }

## 예제 전체 코드

**[ByLabelText.tsx](./ByLabelText.tsx)**<br/>
**[ByLabelText.test.tsx](./ByLabelText.test.tsx)**<br/>

## CONTAINER

screen 사용 시에 생략이 가능하다. <br/>
전달받은 HTMLElement 의 내부에서 해당하는 element 를 특정한다. <br/>
예제 코드는 [링크](../1-1.ByRole/README.md)의 container와 같다. <br/>

## TEXT

label 의 innerText 값을 입력한다. <br/>
해당 값을 갖는 label이 가리키는 element 를 특정한다. <br/>

```tsx
const div1 = screen.getByRole("div1"); // <div role="div1">
const div1Cheese: HTMLInputElement = getByLabelText(div1, "Do you like cheese?");
// label 값이 Do you like cheese? 인 <input type="checkbox" id="cheese" placeholder="cheese" /> 특정
const div1Bread: HTMLInputElement = getByLabelText(div1, "Do you like bread?");
// label 값이 Do you like bread? 인 <input type="checkbox" id="bread" placeholder="bread" /> 특정

expect(div1Cheese.placeholder).toBe("cheese");
expect(div1Bread.placeholder).toBe("bread");
```

## OPTIONS

### selector

기본값이 \* 이며, 특정할 노드의 종류를 정할 수 있다. <br/>

```tsx
const div2 = screen.getByRole("div2"); // <div role="div2">
const div2Input: HTMLInputElement = getByLabelText(div2, "textInput", { selector: "input" });
// label 값이 textInput 인 input 검색, <input type="text" placeholder="textInput" />
const div2TextArea: HTMLInputElement = getByLabelText(div2, "textInput", { selector: "textarea" });
// label 값이 textInput 인 textarea 검색, <textarea />

expect(div2Input.placeholder).toBe("this is input");
expect(div2TextArea.placeholder).toBe("this is textarea");
```
