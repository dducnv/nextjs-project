export default function Footer(){
    return(
        <>
            <footer className="px-4 max-w-7xl mx-auto  py-8 bg-coolGray-100 text-coolGray-600 bg-slate-100">
                <div className="flex flex-wrap items-center justify-center py-4 space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-violet-600">
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"
                                alt="My Logo"
                            />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a href="#">Github</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div className="flex  items-center justify-center px-6 pt-12 text-sm">
                    <span className="text-coolGray-600">© Copyright 2021. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}