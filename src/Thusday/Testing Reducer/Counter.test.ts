import {reducer, State} from "./Counter";

test('check  work  reducer', ()=> {

    const state: State = {value: 3, hide: false}

    const action = {type: 'RESET_VALUE'}
    const action_1 = {type: "PLUS_VALUE"}
    const action_2 = {type: "SUBTRACT_VALUE"}
    const action_3 = {type: "HIDE_BODE_COUNTER"}
    const actionWithError = {type: "pLUS_VALUE"}

    let result = reducer(state, action)
    let result_1 = reducer(state,action_1)
    let result_2 = reducer(state, action_2)
    let result_3 = reducer(state, action_3)
    let result_4 = reducer(state, actionWithError);

    expect(result.value).toBe(0)
    expect(result_1.value).toBe(4)
    expect(result_2.value).toBe(2)
    expect(result_3.hide).toBe(true)
    expect(()=> reducer(state, actionWithError)).toThrow ('Unknown action type')

})