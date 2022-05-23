import {ReactComponent as Copy} from './copy-svgrepo-com.svg'

const ShadowPreview = (props) => {
    const copyCssHandler = (event) => {
        const copyText = document.getElementById('box-shadow-result');
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(copyText.value);
        document.getElementById('alert').classList.remove('hidden')
        setTimeout(() => {
            document.getElementById('alert').classList.add('hidden')
        }, 2000);
    }

    return (<div className={'w-full left-side bg-gray-100 py-8 md:w-2/3 flex justify-center items-center flex-col'}>
        <div className={'shadow-preview bg-white w-60 h-60 rounded-3xl text-center mb-24'}
             style={{boxShadow: props.boxShadow}}>
        </div>

        <div className={'flex flex-col items-center'}>
            <div>
                <input type="text" className={'result-div w-96 h-12 px-2 border rounded mr-4 mb-2'}
                       value={'box-shadow: ' + props.boxShadow} id={'box-shadow-result'}/>
            </div>

            <div className={'w-8 active:shadow-lg text-center'} onClick={copyCssHandler}>
                <Copy/>
                <span id={'alert'} className={'text-gray-500 hidden'}>Copied</span>
            </div>
        </div>
    </div>);
}

export default ShadowPreview;