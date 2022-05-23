const Control = (props) => {
    return(
    <div className={'mb-4'}>
        <div className={'flex items-baseline justify-between mb-1'}>
            <label htmlFor="offset-x">Horizontal shadow</label>
            <div>
                <input type="number" min={-25} max={25} step={.2} id={'offset-x'} onChange={props.onChangeHandler}
                       value={props.value} className={'p-1 border-2  rounded-lg w-14 mr-2'}/>
                <span>px</span>
            </div>
        </div>
        <input type="range" className={'w-full'} min={-100} max={100} value={props}
               onChange={props.onChangeHandler}/>

    </div>
    )
}

export default Control;