export const ifkc = (authType)=>{
    return (dispatch)=>{
        dispatch({
            type : 'kc',
            payload: 0
        })
    }
}

export const ifokta = (authType)=>{
    return (dispatch)=>{
        dispatch({
            type : 'okta',
            payload: 0
        })
    }
}

export const thirdauth = (authType)=>{
    return (dispatch)=>{
        dispatch({
            type : 'thirdauth',
            payload: 0
        })
    }
}