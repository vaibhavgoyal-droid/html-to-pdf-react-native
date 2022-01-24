// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

// import React, {useRef} from 'react';
// // import type {Node} from 'react';
// import { captureRef } from 'react-native-view-shot';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// // import {jsPDF} from "jspdf";
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Share from 'react-native-share';

// export default class ExampleOne extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		name: ['FreshBridge Technologies Pvt. Ltd.'],
// 		date:['Date - 21/01/2022'],
// 		retailer: ['Name of retailer'],
// 		pending: ['Pending','data'],
// 		adjust: ['Adjust Paise','data'],
// 		disc: ['Bill Discount','data'],
// 		tt:['Total for Today','data'],
// 		total: ['Complete Total','data'],
// 		tableHead: ['Name of Vegetable', 'kilo', 'price', 'total'],
// 		tableData: [
// 		  ['aloo', '2', '50', '100'],
// 		  ['gobhi', '4', '60', '240'],
// 		  ['tamatar', '4', '50', '200'],
// 		  ['gajar', '3', '60', '180']
// 		]
// 	  }
// 	}
// //    generatePdf = () =>{
// // 		var doc = new jsPDF("p","pt","a4");
// // 		doc.html(document.querySelector('#content'),{
// // 			callback: function(pdf){
// // 				pdf.save("bill.pdf");
// // 			}
// // 		});
// //    }
// 	render() {
// 	  const state = this.state;
// 	    // const viewRef= useRef();
// 		//   const shareImage = async() => {
// 		//     try{
// 		//       const uri = await captureRef(viewRef,{
// 		//         format: 'png',
// 		//         quality: 1,
// 		//       });
// 		//       await Share.open({url: uri});
// 		//     }catch(err){
// 		//       console.error(err);
// 		//     }
// 		// };
// 	  return (
// 		<ScrollView style={styles.container}>
// 			<View id='content'>
// 		  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
// 		  	<Row data={state.name} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.date} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.retailer} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.pending} flexArr={[6 ,4]} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.adjust} flexArr={[6 ,4]} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.disc} flexArr={[6 ,4]} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.tt} flexArr={[6 ,4]} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.total} flexArr={[6 ,4]} style={styles.head} textStyle={styles.text}/>
// 			<Row data={state.tableHead} flexArr={[4, 2, 2, 2]} style={styles.head} textStyle={styles.text}/>
// 			<Rows data={state.tableData} flexArr={[4, 2, 2, 2]} textStyle={styles.text}/>
// 		  </Table>
// 		  </View>
// 		  <TouchableOpacity>
// 		    <Text style={styles.text1}>Generate PDF</Text>
// 	     </TouchableOpacity>

// 		</ScrollView>
// 	  )
// 	}
//   }
   
//   const styles = StyleSheet.create({
// 	container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
// 	head: { height: 50, backgroundColor: '#f1f8ff' },
// 	text: { margin: 6, color:'black' ,textAlign: 'center' },
// 	text1: {margin: 20,color: 'black', textAlign: 'center', fontSize: 30}
//   });
import React, { Component } from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFetchBlob from 'rn-fetch-blob';
export default class Example extends Component {
	constructor(props) {
        super(props)
        this.state = {
            pending: 10000,
        }
    }
	xyz(){
		var tp
		for(let j=0;j<5;j++){
			tp+='<h1>LOL</h1>'
		}
		return tp;
	}
  async createPDF(temp) {
	var reportdata=[];
	for(let j=0;j<5;j++)
	{
	reportdata.push(
		`<tr style="text-align:center">
		  <td>1</td>
		  <td>2</td>
		  <td>3</td>
		  <td>4</td>
		</tr>`,
	  );
	}
    let options = {
      html: `<!DOCTYPE html>
				<head>
				<style>  
					td,th{ 
						border:1px solid black; 
						} 
					table{ 
						border-collapse: collapse;
						}
				</style>
				</head>
				<body>
				<div class="col-6"> 
					<table class="table_design" id="table- idx " style="width:100%">
						<tr> 
							<th colspan="4" style="width:100%"> business_name</th> 
						</tr> 
						<tr> 
							<th colspan="4" style="width:100%">Date -  dataforuse[i][date] </th> 
						</tr> 
						<tr> 
							<th colspan="4" style="width:100%"> dataforuse[i][name] </th> 
						</tr> 
						<tr> 
							<th colspan="2">pendingDisplay :</th> 
							<th colspan="2"> temp </th> 
						</tr> 
						<tr> 
							<th colspan="2">adjustDisplay :</th> 
							<th colspan="2">abcdef</th> 
						</tr> 
						<tr> 
							<th colspan="2">billDisplay :</th> 
							<th colspan="2">abcdef</th> 
						</tr> 
						<tr> 
							<th colspan="2">todayDisplay :</th> 
							<th colspan="2">abcdef</th> 
						</tr> 
						<tr> 
							<th colspan="2">totalCostDisplay :</th> 
							<th colspan="2">abcdef</th> 
						</tr> 
						<tr> 
							<th>Name of vegetables</th> 
							<th>Quantity</th> 
							<th>Price</th> 
							<th>Total</th> 
						</tr> 
						<tr>
							${reportdata}
						</tr>
					</table>
				</div>
				</body>
				</html>`,
      fileName: 'test',
      directory: 'Download',
	  base64: true,
    };

    let file = await RNHTMLtoPDF.convert(options)
	let filePath = RNFetchBlob.fs.dirs.DownloadDir + '/testPDF.pdf';
    RNFetchBlob.fs.writeFile(filePath, file.base64, 'base64')
            .then(response => {
                console.log('Success Log: ', response);
            })
            .catch(errors => {
                console.log(" Error Log: ", errors);
            })

  }

  render() {
    return(
      <View>
        <TouchableHighlight onPress={()=>this.createPDF(this.state.pending)}>
          <Text>Create PDF</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
