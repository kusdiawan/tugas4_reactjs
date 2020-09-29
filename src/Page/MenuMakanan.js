import React, { Component } from 'react';
import ListMakanan from './../ListData/ListMakanan';

class MenuMakanan extends Component{
	constructor(props){
		super(props);
		this.state={
			pesan: "",
			jumlah: 0,
			tampil: false
		};
		this.pilihPesanan = this.pilihPesanan.bind(this);
		this.nasipadang = this.nasipadang.bind(this);
		this.sate = this.sate.bind(this);
		this.soto = this.soto.bind(this);
     	this.uduk = this.uduk.bind(this);
    	this.kuning = this.kuning.bind(this);
    	this.batal = this.batal.bind(this);
	}

	pilihPesanan(data, e){
		e.preventDefault()
		var tampung = e.target.value
		this.setState(function(state,props){
			return{
				[data] : tampung,
				tampil : true 
			}
		})
	}

	nasipadang(e){
		e.preventDefault()
		this.setState({
			pesan: "Nasi Padang",
			jumlah: this.state.jumlah+1,
			tampil: true 
		});
	}

	sate(e){
		e.preventDefault()
		this.setState({
			pesan: "Sate",
			jumlah: this.state.jumlah+1,
			tampil: true 
		});
	}

	soto(e){
		e.preventDefault()
		this.setState({
			pesan: "Soto Ayam Lamongan",
			jumlah: this.state.jumlah+1,
			tampil: true
		});
	}

	uduk(e){
		e.preventDefault()
		this.setState({
			pesan: "Nasi Uduk",
			jumlah: this.state.jumlah+1,
			tampil: true
		});
	}

	kuning(e){
		e.preventDefault()
		this.setState({
			pesan: "Nasi Kuning",
			jumlah: this.state.jumlah + 1,
			tampil: true
		});
	}

	batal(e){
		e.preventDefault()
		this.setState((state,props) =>({
			pesan: "",
			jumlah: 0,
			tampil: false
		}));
	}

	render(){
		return(
			<div align="center">
			   <h3>Daftar Makanan yang Kami Sediakan : </h3>
			   <table>
			   <tbody>
			   <tr>
			     <td>
			     <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
			     <center>
			       <button onClick={(e) => this.nasipadang(e)}>Pesan Sekarang</button>
			     </center>
			     </td>

				 <td>
			     <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
			     <center>
			       <button onClick={(e) => this.sate(e)}>Pesan Sekarang</button>
			     </center>
			     </td>

			     <td>
			     <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
			     <center>
			       <button onClick={(e) => this.soto (e)}>Pesan Sekarang</button>
			     </center>
			     </td>

			     <td>
			     <ListMakanan gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
			     <center>
			       <button onClick={(e) => this.uduk (e)}>Pesan Sekarang</button>
			     </center>
			     </td>

			     <td>
			     <ListMakanan gambar="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
			     <center>
			       <button onClick={(e) => this.kuning (e)}>Pesan Sekarang</button>
			     </center>
			     </td>
			    </tr>
			   </tbody>
			   </table>
			

			   <br />
			   <input
			     type="text"
			     placeholder="Masukan Pesanan Anda: "
			     onChange={(e) => this.pilihPesanan("pesan", e)} 
			   />

			   <input
			     type="number"
			     placeholder="Jumlah Pesanan : "
			     onChange={(e) => this.pilihPesanan("jumlah", e)} 
			   />

			   <button onClick={(e) => this.batal (e)}>Batalkan Semua Pesanan</button>

			   {this.state.tampil === true?(
			   	<div>
			   	   <h3>Pesanan Anda : {this.state.pesan}</h3>
			   	   <h4>Jumlah Pesanan : {this.state.jumlah} </h4>
			   	</div>
			   	) : (
			   	  <h1>
			   	     <center>Anda Belum Memesan</center>
			   	  </h1>
			   	)}
			</div>
			)
	}
}

export default MenuMakanan;