import React, { useState } from 'react'
//styled
import {Wrap} from './index.styles'
export default function Main() {
    const [valueArea, setValueArea] = useState("# Markdown preview");
    const [listValue, setListValue] = useState([{text: "Markdown preview", isHashtag: true}]);

    // "\n" => enter
    //tim xem cos bao nhieu dau enter
    //check tung dong xem cos match voi ki tu can tim khong
    const handleOnChange = (e) => {
        let newVal = e.target.value;
        setValueArea(newVal)

    }
    const handleEnter = () => {
        function splitString(stringToSplit, separator) {
        const arrayOfStrings = stringToSplit.split(separator)
        let newList = arrayOfStrings.map((item, index) => {
            return {text: item, isHashtag: false}
        })
        return newList
        }
        const newString = valueArea;
        const enter = '\n'
        splitString(newString, enter)        
        let newArray = [...splitString(newString, enter)]        
        const newArr = newArray.map((item) => {
            if(item.text.includes('# ')){
                let newStr = item.text
                let newString = newStr.substr(2);
                return {
                    newString, isHashtag: true
                }
            }
            else {
                return {
                    ...item, isHashtag: false
                }
            }
        })
        console.log('new array', newArr)
        setListValue(newArr) 
    }
    return (
        <Wrap >
            <div className="wrap-container">
                <div className="wrap-content">
                    <div className="content">
                        <textarea id="text-content" className="box-content" value={valueArea} onChange={(e) => handleOnChange(e)} onKeyDown={(e) => handleEnter(e)}>
                            {valueArea}
                        </textarea>
                        <div className="preview-content">
                            {listValue.map((item,index) => (
                            <p className="text-style" key={index} style={{fontSize: item.isHashtag === true ? "48px" : "18px", color: item.isHashtag === true ? "#102A42" : "#000", fontWeight: item.isHashtag === true ? "700": '400'}}>
                                {item.text || item.newString}
                            </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Wrap>
    )
}
