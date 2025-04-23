import Deserialization from "./Deserialization";
import text from "../markdownText/matrix/Matrix.md?raw";
export default function Matrix(){
    return <Deserialization file={text}/>
}