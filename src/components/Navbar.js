import twitterLogo from './img/twitter-squared-64.png'
import githubLogo from './img/github-64.png';

const Navbar = () => {
    return (
        <nav className={'text-center py-4 shadow flex justify-between px-12 items-center'}>
            <h1 className={'text-2xl font-bold'}>Box Shadow</h1>
            <div className={'flex'}>
                <a href="https://twitter.com/ArslanIftikharM" target={'_blank'}>
                    <img src={twitterLogo} alt="" className={'w-12 mr-4'}/>
                </a>
                <a href="https://github.com/arslaniftikhar" target={'_blank'}>
                    <img src={githubLogo} alt="" className={'w-12'}/>
                </a>
            </div>
        </nav>
    );
}
export default Navbar;