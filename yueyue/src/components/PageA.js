import React,{Component} from "react";
//
// class PageA extends  Component{
//     constructor(props){
//         super(props);
//         console.log(props.match.params.id)
//     }
//     render(){
//         return(
//             <div>
//                 a页面
//                 {this.props.match.params.id}
//             </div>
//         );
//     }
// }
const PageA =({match})=>{
    return (
        <div>
            a页面
            {match.params.id}
        </div>
    )
}
export default PageA;