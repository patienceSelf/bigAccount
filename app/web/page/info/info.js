import React, { Component } from 'react';
import {Tabs} from 'antd';
import './information.css';
import InformationContent1 from './informationContent/informationContent1.js';
import InformationContent2 from './informationContent/informationContent2.js';
import InformationContent5 from './informationContent/informationContent5.js';
import InformationContent6 from './informationContent/informationContent6.js';
import InformationContent7 from './informationContent/informationContent7.js';

class Info  extends  React.Component {
  constructor(props){
    super(props)
  }

render(){
  return(
    <div id="infoBox">
        <div>
            <div className="top_bg">
              <div className="top_title">信息披露</div>
            </div>
            <div className="Con_box">
              <Information_Con msg ={this.props.msg}/>
            </div>
        </div>
        <LookImg />
    </div>
    )
  }
}

class Information_Con extends React.Component{
constructor(props){
    super(props)
    this.state={
      flag:false
    }
}

componentWillMount(){
  var str = this.props.msg;
  if(str){
    var index = this.props.msg .lastIndexOf("\/");
    var index2 = this.props.msg .lastIndexOf(".");
    str  = str .substring(index + 1, index2);
    if(str.match('_')){
      // 包含
      this.setState({
        flag:true
      })
    }else{
      this.setState({
        flag:false
      })
    }
  }else{
    return false;
  }
}
render(){
    const TabPane = Tabs.TabPane
    return(
        <Tabs defaultActiveKey="1" ref="Tabs"  tabPosition="left" defaultActiveKey={this.state.flag ? "information7" : "information1"}>
            <TabPane tab="银行存管" key="information1"><InformationContent1/></TabPane>
            <TabPane tab="平台数据" key="information2"><InformationContent2/></TabPane>
            <TabPane tab="备案信息" key="information3">
                <div>
                    <img src={require('./images/audit.png')} style={{margin:'85px auto',display:'block',height:'200px'}}/>
                </div>
            </TabPane>
            <TabPane tab="审核信息" key="information4">
                <div>
                    <img src={require('./images/audit.png')} style={{margin:'85px auto',display:'block',height:'200px'}}/>
                </div>
            </TabPane>
            <TabPane tab="风控策略" key="information5"><InformationContent5/></TabPane>
            <TabPane tab="资质证明" key="information6"><InformationContent6/></TabPane>
            <TabPane tab="政策法规" key="information7"><InformationContent7/></TabPane>
        </Tabs>
    )
  }
}

class LookImg extends React.Component{
  render(){
    return(
      <div>

      </div>
    )
  }
}

export default Info;
