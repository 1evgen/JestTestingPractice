
type PropsType = {
    name: string
}

export const ExampleComponent = (props: PropsType)=> {
        return (
            props.name ? <div>Hello {props.name}</div> : <div>Hey stranger</div>
        )
}