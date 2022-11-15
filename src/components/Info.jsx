import cppIcon from '/icons8-c++.svg'
import jsIcon from '/icons8-javascript.svg'
import cssIcon from '/icons8-css3.svg'
import htmlIcon from '/icons8-html-5.svg'
import psIcon from '/icons8-adobe-photoshop.svg'
import prIcon from '/icons8-adobe-premiere-pro.svg'
import aeIcon from '/icons8-adobe-after-effects.svg'

export default function Info() {
    return (
        <div className="Info">
            <div className='Container'>
                <h1>Skill</h1>
                <p>In Technology world i acquired more skill in design environment and currently developing in Computer Science such as Algorithm, Data Structures, Deep Learning, Machine Learning, and Artificial Intelligence.</p>
                    <img src={htmlIcon} />
                    <img src={cssIcon} />
                    <img src={jsIcon} />
                    <img src={cppIcon} />
                    <img src={psIcon} />
                    <img src={prIcon} />
                    <img src={aeIcon} />

                <p></p>
                </div>

        </div>
    )
}