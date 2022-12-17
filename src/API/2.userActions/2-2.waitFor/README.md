# 소개

백엔드와 통신하는 등의 async 한 테스트를 진행할 때 쓴다. <br/>
하지만 대부분 waitFor 을 사용하기보단, async await 를 사용하기를 추천한다. <br/>
때문에 해당 챕터는 이런게 있구나 정도로 넘어가는것이 좋을 것 같다.

# 예제 전체 코드

**[WaitFor.tsx](./WaitFor.tsx)**<br/>
**[WaitFor.test.tsx](./WaitFor.test.tsx)**<br/>

# 사용법

## 1. WaitFor

## PARAMETERS

- callback: () => T | Promise<T>,
- options?: {
  container?: HTMLElement = document
  timeout?: number = 1000
  interval?: number = 50
  onTimeout?: (error: Error) => Error
  mutationObserverOptions?: MutationObserverInit
  }

## Callback

```tsx
const div1 = screen.getByRole("div1");
const div1Button = getByRole(div1, "button");
const div1H1 = getByRole(div1, "heading", { level: 1 });

fireEvent.click(div1Button);
await waitFor(() => expect(div1H1).toHaveTextContent("awake")); // h1 의 innerText에 awake 가 contain 될 때 까지 대기
```

제한 시간에 도달할 때까지 호출될 함수이다. <br/>
호출 수는 timeout및 interval 옵션에 의해 제한된다. <br/>

## Options

1. container

- 기본값은 document 이며, waitFor 가 진행될 container 를 뜻하지만, <br/>
  대부분의 경우, 모든 요소가 container가 체이닝 되어있어, 사용하는 일이 없다. <br/>

2. timeout

- 기본값은 1000이며, ms 이다. <br/>
  얼마만큼 기다릴지, 그 제한 시간을 뜻한다.

3. interval

- 콜백함수의 재시작까지 시간을 정한다. <br/>
  예를 들어 40으로 설정할 경우 40ms 마다, 해당 콜백을 다시 실행시킨다. <br/>
  하지만, 콜백이 실행되는 시간, 렌더링 시간 등의 이유로, <br/>
  이상한 오차가 발생해서 사용을 지양하는것이 좋을 것 같다. <br/>
  예를 들자면 timeout 1000, interval 100 이라면 1000/100 으로 10번 실행되어야만 하지만, <br/>
  사실은 2번에서 3번정도만 실행된다.

4. onTimout

- 에러 핸들링할때 쓰는 옵션, 왜 쓰는지 잘 모르겠다. <br/>
  기본적으로 RTL 에서 제공하는 에러 메시지 자체가 잘 되어있어 필자는 사용을 지양한다. <br/>

5. mutationObserverOptions

- container 에 해당하는 자손 노드들의 변화를 감지하여 callback 함수를 재실행할 때 사용한다. <br/>
  정확한 사용법은 잘 모르겠다.

## 1. WaitForElementToBeRemoved

- callback: ( () => T ) | T
- options?: {
  container?: HTMLElement
  timeout?: number
  interval?: number
  onTimeout?: (error: Error) => Error
  mutationObserverOptions?: MutationObserverInit
  }

DOM 에서 요소가 제거된 이후에 callback을 삭제할때까지 대기할 떄 쓴다. <br/>
하지만 이 역시 waitFor 와 같이 잘 사용되지 않으므로 <br/>
예제정도만 알아두고 넘어가는것이 좋다. <br/>

```tsx
const el = document.querySelector("div.getOuttaHere");

waitForElementToBeRemoved(document.querySelector("div.getOuttaHere")).then(() =>
  console.log("Element no longer in DOM")
);

el.setAttribute("data-neat", true);
// other mutations are ignored...

el.parentElement.removeChild(el);
// logs 'Element no longer in DOM'
```
