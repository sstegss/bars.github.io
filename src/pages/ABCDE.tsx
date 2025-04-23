import text from "../markdownText/abcde/ABCDE.md?raw";
import Deserialization from "./Deserialization";

export default function ABCDE(){
    return (<Deserialization file={text}></Deserialization>);
}