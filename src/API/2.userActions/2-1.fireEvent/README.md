# FIREEVENT

## PARAMETERS

- node ( HTMLElement )
- event ( Event )

## 예제 전체 코드

**[fireEvent.tsx](./fireEvent.tsx)**<br/>
**[fireEvent.test.tsx](./fireEvent.test.tsx)**<br/>

# HOW TO USE

## 1. fireEvent

```tsx
const div1 = screen.getByRole("div1");
const div1H1 = getByRole(div1, "heading", { level: 1 });
const div1Button: HTMLInputElement = getByRole(div1, "button");

const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true }); // event 선언 및 생성
fireEvent(div1Button, clickEvent); // fire event
expect(div1H1.innerHTML).toBe("Clicked");
```

이벤트를 미리 선언해둔 뒤에, fireEvent의 패러미터로 넘겨줌으로써 실행한다.

## 2. fireEvent.${eventName}

```tsx
fireEvent.click(div1Button); // fire event
expect(div1H1.innerHTML).toBe("not Clicked");
```

fireEvent의 메소드에 접근하여, 이벤트를 발생시키는 방법도 있다.

## 3. createEvent.${eventName}

```tsx
const createdEvent = createEvent.click(div1Button); // 이벤트 선언 및 생성

fireEvent(div1Button, createdEvent); // fire event
expect(div1H1.innerHTML).toBe("Clicked");
fireEvent(div1Button, createdEvent); // fire event
expect(div1H1.innerHTML).toBe("not Clicked");
```

createEvent 를 통해 이벤트를 미리 생성하여 사용할 수도 있다. <br/>
하지만 위 경우, fireEvent의 node 와 createEvent 의 node가 동일해야만 실행된다. <br/>
