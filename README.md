# React + TypeScript + Vite

1. Install packages

```console
npm i
```

2. Start local server with hot reload

```console
npm run dev
```

# Input data details

1. See two pages mock-ups [here in Figma](<https://www.figma.com/file/hLt9MxwFokMbEcaf8Zy4wM/Junte-UI-Components-kit-(Community)?type=design&node-id=663%3A1708&mode=design&t=5KP4AJ24ErG7fO9r-1>)
2. To simplify the task you'll have two pages on the screen at the same time (50% width for each of them). Think that left part it's one page and right part is another page.
3. [Mock-ups for different input states is here](<https://www.figma.com/file/hLt9MxwFokMbEcaf8Zy4wM/Junte-UI-Components-kit-(Community)?type=design&node-id=3329%3A4&mode=design&t=5KP4AJ24ErG7fO9r-1>)
4. [Set of icons can be found here](<https://www.figma.com/file/hLt9MxwFokMbEcaf8Zy4wM/Junte-UI-Components-kit-(Community)?type=design&node-id=15487%3A69&mode=design&t=5KP4AJ24ErG7fO9r-1>)

# Todo checklist

1. Create sign-up/in pages
2. Mock validation (it can be super simple, just to trigger error state). Validate an input on blur event.
3. You must have only one component `Input` which you'll reuse for every field by creating props and changing their values for different cases. You must create bunch of simple props that you can group and create every input state that exist in mock up (basic, sucess, failed, with icon left, right, numbers, password, phone)
4. Do not create new files for react components or styles, use already existing one (you can add icons to assets folder)

# Important

1. Keep focus on `Input` component, it's logic and styles. Page styles and logic are secondary.
2. There are no need in perfect pixel, you can use approximate margins/paddings, font sizes, colors at first and only when generic component Input is ready you can apply ocrrect styles from the mock up and beautify it.
