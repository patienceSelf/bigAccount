import React, {Component} from 'react';
import './detail.css';

class Detail1 extends React.Component {

  render(){
    return(
    <div>
      <h3>网络借贷信息中介机构业务活动信息披露指引</h3>
      <h4>第一章 总则</h4>
      <p>第一条 为规范网络借贷信息中介机构业务活动信息披露行为，维护参与网络借贷信息中介
机构业务活动主体的合法权益，建立客观、公平、透明的网络借贷信息中介业务活动环境，
促进网络借贷行业健康发展，依据《中华人民共和国民法通则》《关于促进互联网金融健康
发展的指导意见》《网络借贷信息中介机构业务活动管理暂行办法》等法律法规，制定本指
引。</p>
      <p>第二条 本指引所称信息披露，是指网络借贷信息中介机构及其分支机构通过其官方网站及
其他互联网渠道向社会公众公示网络借贷信息中介机构基本信息、运营信息、项目信息、重
大风险信息、消费者咨询投诉渠道信息等相关信息的行为。</p>
      <p>第三条 网络借贷信息中介机构应当在其官方网站及提供网络借贷信息中介服务的网络渠道
显著位置设置信息披露专栏，展示信息披露内容。披露用语应当准确、精练、严谨、通俗易
懂。</p>
      <p>第四条 其他互联网渠道包括网络借贷信息中介机构手机应用软件、微信公众号、微博等社
交媒体渠道及网络借贷信息中介机构授权开展信息披露的其他互联网平台。各渠道间披露信
息内容应当保持一致。</p>
      <p>第五条 信息披露应当遵循“真实、准确、完整、及时”原则，不得有虚假记载、误导性陈述、
重大遗漏或拖延披露。</p>
      <p>第六条 信息披露内容应当符合法律法规关于国家秘密、商业秘密、个人隐私的有关规定。</p>
      <h4>第二章 信息披露内容</h4>
      <p>第七条 网络借贷信息中介机构应当向公众披露如下信息：</p>
      <p>（一） 网络借贷信息中介机构备案信息</p>
      <p>1. 网络借贷信息中介机构在地方金融监管部门的备案登记信息；</p>
      <p>2. 网络借贷信息中介机构取得的电信业务经营许可信息；</p>
      <p>3. 网络借贷信息中介机构资金存管信息；</p>
      <p>4. 网络借贷信息中介机构取得的公安机关核发的网站备案图标及编号；</p>
      <p>5. 网络借贷信息中介机构风险管理信息。</p>
      <p>（二） 网络借贷信息中介机构组织信息</p>
      <p>1. 网络借贷信息中介机构工商信息，应当包含网络借贷信息中介机构全称、简称、统一社会
信用代码、注册资本、实缴注册资本、注册地址、经营地址、成立时间、经营期限、经营状
态、主要人员（包括法定代表人、实际控制人、董事、监事、高级管理人员）信息、经营范
围；</p>
      <p>2. 网络借贷信息中介机构股东信息，应当包含股东全称、股东股权占比；</p>
      <p>3. 网络借贷信息中介机构组织架构及从业人员概况；</p>
      <p>4. 网络借贷信息中介机构分支机构工商信息，应当包含分支机构全称、分支机构所在地、分
支机构成立时间、分支机构主要负责人姓名，分支机构联系电话、投诉电话，员工人数；存
在多个分支机构的应当逐一列明；</p>
      <p>5. 网络借贷信息中介机构官方网站、官方手机应用及其他官方互联网渠道信息；存在多个官
方渠道的应当逐一列明。</p>
      <p>（三） 网络借贷信息中介机构审核信息</p>
      <p>1. 网络借贷信息中介机构上一年度的财务审计报告；</p>
      <p>2. 网络借贷信息中介机构经营合规重点环节的审计结果；</p>
      <p>3. 网络借贷信息中介机构上一年度的合规性审查报告。</p>
      <p>网络借贷信息中介机构应当于每年1月10日前披露本条款（一）、（二）项信息；应当于每
年4月30日前披露本条款（三）项信息。若上述任一信息发生变更，网络借贷信息中介机构
应当于变更后10个工作日内更新披露信息。</p>
      <p>第八条 网络借贷信息中介机构应当在每月前5个工作日内，向公众披露截至于上一月末经网
络借贷信息中介机构撮合交易的如下信息：</p>
      <p>（一） 自网络借贷信息中介机构成立以来的累计借贷金额及笔数；</p>
      <p>（二） 借贷余额及笔数；</p>
      <p>（三） 累计出借人数量、累计借款人数量；</p>
      <p>（四） 当期出借人数量、当期借款人数量；</p>
      <p>（五） 前十大借款人待还金额占比、最大单一借款人待还金额占比；</p>
      <p>（六） 关联关系借款余额及笔数；</p>
      <p>（七） 逾期金额及笔数；</p>
      <p>（八） 逾期90天（不含）以上金额及笔数；</p>
      <p>（九） 累计代偿金额及笔数；</p>
      <p>（十） 收费标准;</p>
      <p>（十一） 其他经营信息。</p>
      <p>第九条 网络借贷信息中介机构应当及时向出借人披露如下信息：</p>
      <p>（一） 借款人基本信息，应当包含借款人主体性质（自然人、法人或其他组织）、借款人
所属行业、借款人收入及负债情况、截至借款前6个月内借款人征信报告中的逾期情况、借
款人在其他网络借贷平台借款情况；</p>
      <p>（二） 项目基本信息，应当包含项目名称和简介、借款金额、借款期限、借款用途、还款
方式、年化利率、起息日、还款来源、还款保障措施；</p>
      <p>（三） 项目风险评估及可能产生的风险结果；</p>
      <p>（四） 已撮合未到期项目有关信息，应当包含借款资金运用情况、借款人经营状况及财务
状况、借款人还款能力变化情况、借款人逾期情况、借款人涉诉情况、借款人受行政处罚情
况等可能影响借款人还款的重大信息。</p>
      <p>本条款（一）、（二）、（三）项内容，网络借贷信息中介机构应当于出借人确认向借款人
出借资金前向出借人披露。 本条款（四）项内容，若借款期限不超过六个月，网络借贷信
息中介机构应当按月（每月前5个工作日内）向出借人披露；若借款期限超过六个月，网络
借贷信息中介机构应当按季度（每季度前5个工作日内）向出借人披露。若已发生足以导致
借款人不能按约定期限足额还款的情形时，网络借贷信息中介机构应当及时向出借人披露。
出借人应当对借款人信息予以保密，不得非法收集、使用、加工、传输借款人个人信息，不
得非法买卖、提供或者公开借款人个人信息。 第十条 网络借贷信息中介机构或其分支机构
发生下列情况之一的，网络借贷信息中介机构应当于发生之日起48小时内将事件的起因、目
前的状态、可能产生的影响和采取的措施向公众进行披露。</p>
    <p>（一） 公司减资、合并、分立、解散或申请破产；</p>
    <p>（二） 公司依法进入破产程序；</p>
    <p>（三） 公司被责令停业、整顿、关闭；</p>
    <p>（四） 公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重
大行政处罚；</p>
    <p>（五） 公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大
诉讼、仲裁，或涉嫌违法违纪被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取
强制措施；</p>
    <p>（六） 公司主要或者全部业务陷入停顿；</p>
    <p>（七） 存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项。</p>
    <p>第十一条 网络借贷信息中介机构应当向公众披露咨询、投诉、举报联系电话、电子邮箱、
通讯地址。</p>
    <p>网络借贷信息中介机构应当在其官方网站上定期以公告形式向公众披露其年度报告、相关法
律法规及网络借贷有关监管规定。</p>
    <p>第十二条 披露的信息应当采用中文文本。同时采用外文文本的，应当保证两种文本的内容
一致。两种文本产生歧义的，以中文文本为准。</p>
    <p>第十三条 披露的信息应当采用阿拉伯数字。除特别说明外，货币单位应当为人民币“元”。</p>
    <h4>第三章 信息披露管理</h4>
    <p>第十四条 网络借贷信息中介机构应当建立健全信息披露制度，指定专人负责信息披露事
务，确保信息披露专栏内容可供社会公众随时查阅。</p>
    <p>第十五条 网络借贷信息中介机构应当对信息披露内容进行书面留存，并应自披露之日起保
存五年以上。</p>
    <p>第十六条 网络借贷信息中介机构应当按要求将信息披露公告文稿和相关备查文件报送其工
商登记注册地地方金融监管部门、国务院银行业监督管理机构派出机构，并置备于网络借贷
信息中介机构住所供社会公众查阅。</p>
    <p>第十七条 网络借贷信息中介机构的董事、监事、高级管理人员应当忠实、勤勉、尽职，保
证披露的信息真实、准确、完整、及时。网络借贷信息中介机构信息披露专栏内容均应当有
网络借贷信息中介机构法定代表人的签字确认。</p>
    <p>第十八条 借款人应当配合网络借贷信息中介机构及出借人对项目有关信息进行调查核实，
保证提供的信息真实、准确、及时、完整、有效。</p>
    <p>第十九条 本指引没有规定，但不披露相关信息可能导致借款人、出借人产生错误判断的，
网络借贷信息中介机构应当将相关信息予以及时披露。</p>
    <p>第二十条 网络借贷信息中介机构拟披露信息属于国家秘密的，按本指引规定披露可能导致
其违反国家有关保密法律法规的，可以豁免披露。本指引所称的国家秘密，是指国家有关保
密法律法规及部门规章规定的，关系国家安全和利益，依照法定程序确定，在一定时间内只
限一定范围的人员知悉，泄露后可能损害国家在政治、经济、国防、外交等领域的安全和利
益的信息。</p>
    <p>第二十一条 未按本指引要求开展信息披露的相关当事人，由相关监管部门按照《网络借贷
信息中介机构业务活动管理暂行办法》第四十条、第四十一条予以处罚。</p>
    <p>第二十二条 网络借贷信息中介机构应当按要求及时将信息披露内容报送监管机构。</p>
    <h4>第四章 附则</h4>
    <p>第二十三条 网络借贷信息中介业务活动信息披露行为，应当依据《网络借贷信息中介机构
业务活动管理暂行办法》及本指引，接受国务院银行业监督管理机构及其派出机构和地方金
融监管部门的监督管理。</p>
    <p>第二十四条 中国互联网金融协会依据本指引及其他有关法律法规、自律规则，对网络借贷
行业的信息披露进行自律管理。</p>
    <p>第二十五条 已开展网络借贷信息中介业务的机构，在开展业务过程中存在不符合本指引要
求情形的，应在本指引公布后进行整改，整改期自本指引公布之日起不超过6个月。逾期未
整改的，按照《网络借贷信息中介机构业务活动管理暂行办法》及《网络借贷信息中介机构
备案登记管理指引》的有关规定执行。</p>
    <p>第二十六条 本指引所称不超过、以内、以下，包括本数。</p>
    <p>第二十七条 本指引解释权归国务院银行业监督管理机构。</p>
    <p>第二十八条 本指引自公布之日起施行。</p>
    <h4>附件</h4>
    <h4>信息披露内容说明</h4>
    <p>1.1数据按月披露的，统计时点为统计月末最后一日24时。数据按季度披露的，统计时点为
统计季度末最后一日24时。</p>
    <p>1.2信息披露货币单位为人民币“元”，保留两位以上小数；数量单位为“个”、“人”；比例统计
单位“%”。</p>
    <p>1.3信息披露日期格式统一为“yyyy-mm-dd”，如“2015-1-31”。</p>
    <p>1.4信息披露电话格式统一为“区号-电话号码”或“手机号”。</p>
    <p>1.5网络借贷信息中介机构以下简称“网贷机构”。</p>
    <p>2.1网贷机构备案信息</p>
    <p>2.1.1备案信息：指网贷机构已经备案登记的相关信息，包括备案登记地方金融监管部门、
备案登记时间、备案登记编号（如有）等。</p>
    <p>2.1.2电信业务经营许可信息：指网贷机构获得的网络借贷中介业务电信业务经营许可证号。</p>
    <p>2.1.3资金存管信息：指网贷机构资金存管的银行全称。</p>
    <p>2.1.4网站备案图标及编号：指网贷机构获得的公安机关出具的网站备案图标及编号。</p>
    <p>2.1.5风险管理信息：指网贷机构风险管理架构、风险评估流程、风险预警管理情况、催收
方式等信息。</p>
    <p>2.2网贷机构组织信息</p>
    <p>2.2.1网贷机构工商信息</p>
    <p>（1） 公司全称：指网贷机构在工商部门登记注册的公司全称。</p>
    <p>（2） 公司简称(常用名)：指网贷机构对外简称或常用简称，如有多个简称，应当逐一列明
并以分号分隔。</p>
    <p>（3） 统一社会信用代码：指网贷机构在工商部门登记注册后获得的统一社会信用代码；若
无统一社会信用代码，则填写组织机构代码。</p>
    <p>（4） 公司注册资本：指网贷机构在工商部门依法登记的注册资本。有限责任公司的注册资
本为在工商部门依法登记的全体股东认缴的出资额。股份有限公司采取发起设立方式设立的，
注册资本为在工商部门依法登记的全体发起人认购的股本总额；股份有限公司采取募集设立
方式设立的，注册资本为在工商部门依法登记的实收股本总额。</p>
      <p>（5） 实缴注册资本：指网贷机构已实际出资的资金总额。</p>
      <p>（6） 公司注册地：指网贷机构在工商部门登记注册的公司地址。</p>
      <p>（7） 公司经营地：指网贷机构实际开展经营的地址，如有多个经营地，应当逐一列明并以
分号分隔。</p>
      <p>（8） 公司成立时间：指网贷机构注册成立的日期，即营业执照上的公司成立日期。</p>
      <p>（9） 公司经营期限：指网贷机构在工商部门注册的存续期间。</p>
      <p>（10） 公司经营状态：指网贷机构目前公司经营状况，分为开业、停业、注销、吊销。若
为停业状况，应补充说明原因。</p>
      <p>（11） 公司法定代表人：指网贷机构营业执照上登记的法定代表人姓名。</p>
      <p>（12） 公司经营范围：指网贷机构于工商登记注册部门核准登记的经营范围。</p>
      <p>2.2.2网贷机构股东信息</p>
      <p>（1） 公司股东名称：指网贷机构股东在工商部门依法登记注册的全称。</p>
      <p>（2） 公司股东占股比例：指网贷机构股东持有股份占网贷机构全部股份的比例，单位为百
分比。</p>
      <p>2.2.3组织架构及从业人员概况</p>
      <p>（1） 组织架构：指网贷机构内部部门设置及层级。</p>
      <p>（2） 从业人员概况：指在网贷机构工作，由网贷机构支付工资的各类人员，以及有工作岗
位，但由于学习、病休产假等原因暂未工作，仍由单位支付工资的员工，包括正式人员、劳
务派遣人员、临时聘用人员等的人员总数、年龄分布、学历分布等情况。</p>
      <p>2.2.4分支机构信息</p>
      <p>（1） 分支机构全称：指网贷机构的分支机构在工商部门登记注册的公司全称。</p>
      <p>（2） 分支机构所在地：指网贷机构的分支机构在工商部门登记注册的公司地址。</p>
      <p>（3） 分支机构成立时间：指网贷机构的分支机构注册成立的日期，即分支机构营业执照上
的分支机构成立日期。</p>
      <p>（4） 分支机构负责人：指网贷机构的分支机构的负责人姓名。</p>
      <p>（5） 分支机构联系电话：指网贷机构的分支机构的联系电话。</p>
      <p>（6） 分支机构投诉电话：指网贷机构的分支机构的投诉电话。</p>
      <p>（7） 分支机构员工人数：指网贷机构的分支机构的员工总人数。同时应当区分正式员工、
派遣员工、临时员工数量。</p>
      <p>2.2.5渠道信息</p>
      <p>（1） 公司官方网址：指网贷机构在运营的网站域名及IP地址。</p>
      <p>（2） 平台APP名称、微信公众号、微博：指网贷机构依法注册并使用的开展网络借贷信息
中介服务的APP、社交媒体账号及IP地址（或链接）。</p>
      <p>2.3网贷机构审核信息</p>
      <p>2.3.1财务审计报告：指会计师事务所出具的网贷机构上一年度审计报告。</p>
      <p>2.3.2重点环节审计结果：指会计师事务所出具的对网贷机构出借人与借款人资金存管、信
息披露情况、信息科技基础设施安全、经营合规性、资金运用流程等重点环节的审计结果。</p>
      <p>2.3.3合规报告：指律师事务所出具的对网贷机构合规情况审查报告。</p>
      <p>2.4网贷机构经营信息</p>
      <p>2.4.1累计交易总额：指自网贷机构成立起，经网贷机构撮合完成的借款项目的本金总合。</p>
      <p>2.4.2累计交易笔数：指自网贷机构成立起，经网贷机构撮合完成的借款交易笔数总合。</p>
      <p>2.4.3借贷余额：指截至统计时点，通过网贷机构已经上线运行的网络借贷信息中介平台完
成的借款总余额。</p>
      <p>2.4.4累计借款人数量：指借款人通过网贷机构成功借款的借款人总数。同一借款人多次借
款的，按实际借款人计算。（例如：张三借款3次，累计借款人数量为1）</p>
      <p>2.4.5累计出借人数量：指出借人通过网贷机构成功出借资金的出借人总数。同一出借人多
次出借的，按实际出借人计算。（例如：张三出借3次，累计出借人数量为1）</p>
      <p>2.4.6当前借款人数量：指截至统计时点仍存在待还借款的借款人总数。同一借款人多次借
款的，按实际借款人计算。</p>
      <p>2.4.7当前出借人数量：指截至统计时点仍存在待收借款的出借人总数。同一出借人多次出
借的，按实际出借人计算。</p>
      <p>2.4.8前十大借款人待还金额占比：指在平台撮合的项目中，借款最多的前十户借款人的借
款余额占总借款余额的比例。</p>
      <p>2.4.9最大单一借款人待还金额占比：指在平台撮合的项目中，借款最多一户借款人的借款
余额占总借款余额的比例。</p>
      <p>2.4.10关联关系借款余额：指截至统计时点，与平台具有关联关系的借款人通过平台撮合完
成的借款总余额。关联关系指网络借贷信息中介机构主要股东、实际控制人、董事、监事、
高级管理人员与其直接或间接控制、有重大影响的企业、自然人之间的关系，以及可能导致
网络借贷信息中介机构利益转移的其他关系（主要股东，指持有或控制网络信息借贷中介机
构5%以上股份或表决权的自然人、法人或其他组织；直接或间接控制企业，指直接或间接
持有企业5%以上股份或表决权）。</p>
      <p>2.4.11逾期金额：指按合同约定，出借人到期未收到本金和利息的金额总合。收到，是指资
金实际划付至出借人银行账户。</p>
      <p>2.4.12逾期笔数：指按合同约定，出借人到期未收到本金和利息的借款的笔数。收到，是指
资金实际划付至出借人银行账户。</p>
      <p>2.4.13逾期90天以上金额：指逾期90天（不含）以上的借款本金余额。</p>
      <p>2.4.14逾期90天以上笔数：指逾期90天（不含）以上的借款的笔数。</p>
      <p>2.4.15代偿金额：指因借款方违约等原因第三方（非借款人、非网贷机构）代为偿还的总金
额。</p>
      <p>2.4.16代偿笔数：指因借款方违约等原因第三方（非借款人、非网贷机构）代为偿还的笔数。</p>
      <p>2.4.17收费标准：指网贷机构向借款人收取费用的名目及费用计算标准。如涉及多个收费项
目，应当逐一列明。</p>
      <p>2.5网贷机构项目信息</p>
      <p>2.5.1借款人基本信息</p>
      <p>（1） 借款人主体性质：指借款人为自然人、法人或其他组织。</p>
      <p>（2） 借款人所属行业：指借款自然人所在单位、借款法人或其他组织根据《国民经济行业
分类》划分的行业类别。</p>
      <p>（3） 借款人收入及负债情况：指借款人在日常活动中所形成的、会导致所有者权益增加
的、非所有者投入资本的经济利益的总流入，以及借款人过去的交易或者事项形成的、预期
会导致经济利益流出企业的现时义务。</p>
      <p>（4） 借款人征信报告情况：指脱敏处理后，经借款人授权由中国人民银行征信系统出具的
征信报告中借款人的逾期情况。</p>
      <p>2.5.2项目基本信息</p>
      <p>（5） 项目名称和简介：指网络借贷信息中介平台上展示的借款人借款项目的名称和基本情
况介绍。</p>
      <p>（6） 借款金额：指借款人申请借款的本金金额。</p>
      <p>（7） 借款期限：指借款人申请借款的时长，应当以天、月、年为单位列明。</p>
      <p>（8） 借款用途：指借款人申请借款的具体去向。</p>
      <p>（9） 还款方式：还款方式应当以文字说明，并向出借人列明计算方式。如：按月付息到期
还本。借款金额为X，年利率为Y，借款期限为Z月，则每月应还利息计算公式为：X×Y/12,
应还总利息计算公式为：X×Y/12×Z。应还本金为X。</p>
      <p>（10） 年化利率：指借款人向出借人支付的利息费率，利率应当以年化形式披露，年以365
天计算。</p>
      <p>（11） 起息日：指利息产生的起始日期。</p>
      <p>（12） 还款来源：指借款人借款的还款依据。</p>
      <p>（13） 担保措施：指在借款活动中，债权人为保障其债权的实现，要求债务人向债权人提
供担保的方式（包括担保主体名称、担保措施、是否已履行完毕法律法规需办理的相关手续
等信息）。</p>
      <p>附：</p>
      <p>《网络借贷信息中介机构业务活动信息披露指引》原文链接：
http://www.cbrc.gov.cn/govView_C8D68D4C980A4410B9F4E21BA593B4F2.html</p>
    </div>
    )
  }
}
export default Detail1;
