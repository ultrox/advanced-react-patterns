## Kent C. Dodds - Simply React

- Use enums instead of booleans for 

David Khourshid → Use enums, don't make impossible states possible

```
<Accordion items={accordionItems} position="left"}
<Accordion items={accordionItems} right=true left=true}
Immposible state changes
```

## State Reducers 

https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks

This is inversion of control

- Modify how state update happens
* Enable users to change state as it happens

1. End user does action
2. Dev calls dispatch
3. Hook determines the necessary changes
4. Hook calls Dev's code for further changes ← inversion of control part
5. Hook makes state changes


### Project Toggle

https://codesandbox.io/s/9j0pkq30lo

Make toggle where you can only click 4 times on it before you reset it.
Toggle needs to be able to be turned off/on with buttons, and with on click on toggle btn.

### Simple

Constrains: You have `useToggle` hook that fully control's toggle


### Medium 1

Partially responsible for state updates, since it will receive changes

Dev will receive state & changes that needs should happen
Dev needs to provide function that will return applicable changes to update state


### Medium 2

https://mobile.twitter.com/sebastienlorber/status/1110461401317945344
https://youtu.be/RENGNzZ0dIs?t=724

Fully responsible for changes, needs to compose both reducers, its own & use default.
So it will not get changes

## Project Accordion


This needs to support
- items
* position [left, right, top, bottom]
* single - click one, other closed

One has to be open at all time
