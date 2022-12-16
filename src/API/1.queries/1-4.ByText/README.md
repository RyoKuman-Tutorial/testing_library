# BYTEXT

## PARAMETERS

- container ( HTMLElemnet )
- role ( TextMatch )
- options?: {
  selector?: string = '\*',
  exact?: boolean = true,
  ignore?: string|boolean = 'script, style',
  normalizer?: NormalizerFn,
  }): HTMLElement

## 예제 전체 코드

**[ByText.tsx](./ByText.tsx)**<br/>
**[ByText.test.tsx](./ByText.test.tsx)**<br/>

## CONTAINER

screen 사용 시에 생략이 가능하다. <br/>
전달받은 HTMLElement 의 내부에서 해당하는 element 를 특정한다. <br/>
예제 코드는 [링크](../1-1.ByRole/README.md)의 container와 같다. <br/>

## TEXT

text 값을 입력한다. <br/>
해당 값을 text 로 갖는 element 를 특정한다. <br/>

## OPTIONS

### selector

기본값이 \* 이며, 특정할 노드의 종류를 정할 수 있다. <br/>
예제 코드는 [링크](../1-2.ByLabelText/README.md)의 selector와 같다. <br/>

### ignore

기본값으로 'script, style' 를 갖는다. <br/>
검색 시에 제외할 태그를 설정할 수 있다. <br/>

```js
const ignoreDiv = screen.getByRole("ignore");
const ignoreSpan = getByText(ignoreDiv, "ignore", { ignore: "p" });
// text 가 ignore 이 노드 검색, 검색 시에 p 태그를 제외한다.
// <p id="p">ignore</p>
const ignoreP = getByText(ignoreDiv, "ignore", { ignore: "span" });
// text 가 ignore 이 노드 검색, 검색 시에 span 태그를 제외한다.
// <span id="span">ignore</span>;
expect(ignoreSpan.id).toBe("span");
expect(ignoreP.id).toBe("p");
```
