import cppIcon from '/icons8-c++.svg'
import jsIcon from '/icons8-javascript.svg'
import cssIcon from '/icons8-css3.svg'
import htmlIcon from '/icons8-html-5.svg'
import psIcon from '/icons8-adobe-photoshop.svg'
import prIcon from '/icons8-adobe-premiere-pro.svg'
import aeIcon from '/icons8-adobe-after-effects.svg'
import { useInView } from 'react-intersection-observer'


export default function Info() {
    const { ref: myRef, inView: isInvisible } = useInView()

    return (
        <div className="Info">
            <div className='Container'>
                <h1>Skill</h1>
                <p>In Technology world i acquired more skill in design environment and currently developing in Computer Science such as Algorithm, Data Structures, Deep Learning, Machine Learning, and Artificial Intelligence.</p>
                    <div className='html-icon'>
                        <img src={htmlIcon} />
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate html ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                    </div>
                    <div className='css-icon'>
                        <img src={cssIcon} />
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate css ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                    </div>
                    <div className='js-icon'>
                        <img src={jsIcon} />
                        <span 
                            className={`rate js ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate js ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>

                    </div>
                    <div className='cpp-icon'>
                        <img src={cppIcon} />
                        <span 
                            className={`rate cpp ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate cpp ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                    </div>
                    <div className='ps-icon'>
                        <img src={psIcon} />
                        <span 
                            className={`rate ps ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ps ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                    </div>
                    <div className='pr-icon'>
                        <img src={prIcon} />
                        <span 
                            className={`rate pr ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate pr ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                    </div>
                    <div className='ae-icon'>
                        <img src={aeIcon} />
                        <span 
                            className={`rate ae ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show fill' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae  ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                        <span 
                            className={`rate ae ${isInvisible ? 'show' : ''}`}
                            ref={myRef}
                            ></span>
                    </div>
                </div>

        </div>
    )
}