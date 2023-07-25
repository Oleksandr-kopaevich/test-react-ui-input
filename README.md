# React + TypeScript + Vite

1. Fork repository
2. Clone it locally
3. Install packages

```console
npm install
```
OR
```console
yarn
```

2. Start the local server with hot reload

```console
npm run dev
```
OR
```console
yarn dev
```

# Input data details

1. See two pages mock-ups [here in Figma](<https://www.figma.com/file/hLt9MxwFokMbEcaf8Zy4wM/Junte-UI-Components-kit-(Community)?type=design&node-id=663%3A1708&mode=design&t=5KP4AJ24ErG7fO9r-1>)
2. To simplify the task you'll have two pages on the screen at the same time (50% width for each of them). Think that the left part it's one page and the right part is another page.
3. [Mock-ups for different input states are here](<https://www.figma.com/file/hLt9MxwFokMbEcaf8Zy4wM/Junte-UI-Components-kit-(Community)?type=design&node-id=3329%3A4&mode=design&t=5KP4AJ24ErG7fO9r-1>)
4. [Set of icons can be found here](<https://www.figma.com/file/hLt9MxwFokMbEcaf8Zy4wM/Junte-UI-Components-kit-(Community)?type=design&node-id=15487%3A69&mode=design&t=5KP4AJ24ErG7fO9r-1>)

# Todo checklist

1. Create sign-up/in pages
   
2. Mock validation (it can be super simple, just to trigger an error state). Validate an input on blur event:
   - `Name`, `Surname`: non-empty strings, minimum length is 3 symbols
   - `Email`: valid email string, you can use regexp to check it:
     ```regexp
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     ```
  - `Phone`: valid email string, you can use regexp to check it matches the pattern `(123) 456-7890`:
     ```regexp
     /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
     ```
  - `Password`: non-empty string, minimum length is 6? must contain one lower-case letter, one upper-case letter, and one digit.

3. You must have only one component `Input` which you'll reuse for every field by creating props and changing their values for different cases. You must create a bunch of simple props that you can group and create every input state that exists in the mock-up:
   - `type` (text, email, phone, password...)
   - `label`
   - `message`
   - `required` (true, false)
   - `disabled` (true, false)
   - `variant` (regular, success, error)
   - `withIcon` (none, left, right)
   - `icon` (icon link)
5. Do not create new files for react components or styles, use already existing ones (you can add icons to the assets folder)

# Important

1. Keep the focus on the `Input` component, its logic and styles. Page styles and logic are secondary.
2. There is no need for perfect pixels, you can use approximate margins/paddings, font sizes, colors at first and only when the generic component Input is ready you can apply correct styles from the mock-up and beautify it.
