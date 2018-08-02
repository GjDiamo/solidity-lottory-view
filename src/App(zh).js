// import React, { Component } from 'react';
// import {Message, Container, Card, Image, Icon,Statistic,Button,Label} from 'semantic-ui-react';
// import web3 from './web3';
// import lottery from './lottery';
// //组件
// class App extends Component {
//     // 前端页面显示
//     　  state={
//          manager:'',
//          playersCount:0,
//          balance:0,
//          lodaing:false,
//            showbutton:'none'
//      }
//      async componentDidMount(){
//         console.log(web3.version)
//          //页面需要加载的数据
//          //创建地址变量
//          const address = await lottery.methods.getManager().call();
//          //赋值(并且显示到页面)
//          this.setState({manager:address});
//          //创建参与人数变量
//          const playsCount =await lottery.methods.getPlayersCount().call();
//          this.setState({playsCount:playsCount});
//          //创建账户金额变量
//          const balance = await lottery.methods.getBalance().call();
//          this.setState({balance:web3.utils.fromWei(balance,'ether')});
//          const accounts = await web3.eth.getAccounts();
//          if(accounts[0]=== address){
//              this.setState({showbutton:'inline'});
//              }else{
//              this.setState({showbutton:'none'});
//          }
//      }
//      enter =async ()=>{
//          this.setState({loading:true});
//          //获取账户
//          const accounts = await web3.eth.getAccounts();
//          //拿着彩票智能合约调用enter方法
//          await lottery.methods.enter().send({
//              from:accounts[0],
//              value:'1000000000000000000'
//          });
//          this.setState({loading:false});
//          window.location.reload(true);
//      };
//     pickWinner = async ()=>{
//         this.setState({loading:true});
//         //获取账户
//         const accounts = await web3.eth.getAccounts();
//         //拿着彩票智能合约调用pickWinner方法
//         await  lottery.methods.pickWinner().send({
//             from: accounts[0]
//         });
//         this.setState({loading:false});
//         window.location.reload(true);
//     };
//     refund= async ()=>{
//         this.setState({loading:true});
//         //获取账户
//         const accounts = await web3.eth.getAccounts();
//         //拿着彩票智能合约调用pickWinner方法
//         await  lottery.methods.refund().send({
//             from: accounts[0]
//         });
//         this.setState({loading:false});
//         //页面强制刷新
//         window.location.reload(true);
//     };
//
//
//   render() {
//        //简单测试web3版本是否成功；
//        let version = web3.version;
//        console.log(version)
//     return (
//         <Container>
//             <br/>
//             <Message info>
//                 <Message.Header>区块链彩票项目</Message.Header>
//                 <p>快来买呀,越买越发财</p>
//             </Message>
//             <Card.Group>
//                 <Card>
//                     <Image src='/images/logo.jpeg'/>
//                     <Card.Content>
//                         <Card.Header>六合彩</Card.Header>
//                         <Card.Meta>
//                             <p>管理员地址:</p>
//                             <Label size='mini'>
//                                 {this.state.manager}
//                             </Label>
//                         </Card.Meta>
//                         <Card.Description>每周三晚上8点准时开奖.</Card.Description>
//                     </Card.Content>
//                     <Card.Content extra>
//                         <a>
//                             <Icon name='user'/>
//                             {this.state.playerscount}人参与
//                         </a>
//                     </Card.Content>
//                     <Card.Content extra>
//                         <Statistic color='red'>
//                             <Statistic.Value>{(this.state.balance)}ether</Statistic.Value>
//                         </Statistic>
//                     </Card.Content>
//                     {/*绑定点击事件*/}
//                     <Button animated='fade'onClick={this.enter}loading={this.state.loading} disabled={this.state.loading}>
//                         <Button.Content visible>投注产生希望</Button.Content>
//                         <Button.Content hidden>购买放飞梦想</Button.Content>
//                     </Button>
//                     <Button color='yellow' style={{display:this.state.showbutton}} onClick={this.pickWinner}>开奖</Button>
//                     <Button color='red' style={{display:this.state.showbutton}} onClick={this.refund}>退钱</Button>
//                 </Card>
//             </Card.Group>
//
//         </Container>
//     );
//   }
// }
//
// export default App;
