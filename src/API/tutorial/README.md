# TUTORIAL

## 1. CRA 를 통해 react app 을 생성해보자,

```bash
$ npx create-react-app testing_library --template typescript
$ cd testing_library/src
$ mkdir API/tutorial
$ cd API/tutorial
```

위 명령어를 차례대로 실행하여 기본적인 파일들을 다운로드받자, <br/>
귀찮다면 이 레포지토리를 통째로 다운로드 받아도 좋다. <br/>
만약 그럴 경우, API/tutorial 에 해당하는 모든 파일들을 삭제한다. <br/>

## 2. Tutorial.tsx

```tsx
import { useState } from "react";

function Tutorial() {
  const [value, setValue] = useState("no value");
  const [input, setInput] = useState("");

  const onChagne = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const onClick = () => {
    if (input !== "") setValue(input);
    else setValue("no value");
    setInput("");
  };

  return (
    <div>
      <h1>{value}</h1>
      <input type="text" value={input} onChange={onChagne} placeholder="text" />
      <input type="button" value="button" onClick={onClick} />
    </div>
  );
}

export default Tutorial;
```

input 을 받아 버튼을 클릭하면 h1 에 input의 value 를 넣어주는 간단한 코드이다. <br/>

## 3. Tutorial.test.tsx

```tsx
import Tutorial from "./Tutorial";

test("testing", () => {});
```

제일 먼저, 테스트할 tsx 파일을 import 해준다. <br/>
위 경우에는 Tutorial을 테스트 할 것이기 떄문에 Tutorial을 import 해준다 <br/>
추가적으로 test 함수를 작성해준다. <br/>
test 함수는 테스트 실행 시에 보여질 string <br/>
실제 실행될 테스트의 내용 <br/>
마지막으로 timeout 을 받는다. <br/>

---

```tsx
test("testing", () => {
  // 테스트 내용
});
```

예를 들어 위 함수는 테스트 시에 테스트 내용을 전부 테스트 한 이후에 <br/>
아래와 같은 결과를 보여준다. <br/>

```bash
$ src/API/tutorial/Tutorial.test.tsx
  ✓ testing (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.232 s, estimated 1 s
Ran all test suites.

Watch Usage: Press w to show more.
```

보면, test 결과로 testing 이 보인다.

---

```tsx
import { render, screen } from "@testing-library/react";
import Tutorial from "./Tutorial";

test("testing", () => {
  render(<Tutorial />);
  const title = screen.getByText("no value"); // innerHTML 가 no value 인 <h1>{value}</h1>
  const input = screen.getByPlaceholderText("text"); // placeholder 가 text 인 <input type="text" value={input} onChange={onChagne} placeholder="text" />
  const button = screen.getByText("button"); // innerHTML 가 button 인 <input type="button" value="button" onClick={onClick} />
});
```

screen 을 import 하여 , render 된 결과에 접근한다. <br/>
접근 방법은 getby, querby, findby 등이 있다. 이는 추후에 API 에서 다루겠다 <br/>

---

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import Tutorial from "./Tutorial";

test("testing", () => {
  render(<Tutorial />);
  const title = screen.getByText("no value");
  const input = screen.getByPlaceholderText("text");
  const button = screen.getByDisplayValue("button");

  fireEvent.change(input, { target: { value: "hello" } }); // input의 value 값을 hello 로 바꿔줌
  fireEvent.click(button); // button 을 클릭함
});
```

fireEvenr 을 import 하여 , 이벤트를 발생시킨다. <br/>

---

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import Tutorial from "./Tutorial";

test("testing", () => {
  render(<Tutorial />);
  const title = screen.getByText("no value");
  const input = screen.getByPlaceholderText("text");
  const button = screen.getByDisplayValue("button");

  fireEvent.change(input, { target: { value: "hello" } });
  fireEvent.click(button);
  expect(title.innerHTML).toBe("hello"); // title.innerHTML 값을 확인한다.
});
```

최종적으로 expect 를 이용해서 내부 값을 확인한다.<br/>
최종적으로 테스트 실행 결과는 아래와 같다.

```bash
$ PASS  src/API/tutorial/Tutorial.test.tsx
  ✓ testing (15 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.209 s, estimated 1 s
Ran all test suites.

Watch Usage: Press w to show more.
```
