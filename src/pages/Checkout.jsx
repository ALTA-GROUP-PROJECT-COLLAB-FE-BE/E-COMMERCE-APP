import React, { useState } from "react";
import { Container, Modal, Button, ModalTitle, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

function Checkout() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="my-5 px-auto rounded border-main justify-center align-items-center">
            <section className="py-5 vh-150">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <h4>Nama User</h4>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="alamatPengiriman" className="form-label">
                                        Alamat Pengiriman
                                    </label>
                                    <textarea className="form-control" id="alamatPengiriman" placeholder="Masukkan alamat barang yang akan dikirim" rows={4} cols={50} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nomorHandphone" className="form-label">
                                        Nomor Handphone
                                    </label>
                                    <input type="text" className="form-control" id="nomorHandphone" placeholder="Masukkan nomor handphone penerima" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metodePembayaran" className="form-label">
                                        Metode Pembayaran
                                    </label>
                                    <select name="metode" id="metode">
                                        <option value="cod">Cash on Delivery</option>
                                        <option value="transfer">Transfer Tunai</option>
                                    </select>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between">
                                <button className=" flex-shrink-0 button-main shadow" type="button" onClick={handleShow}>
                                    Simpan
                                </button>
                                <Modal show={show} onHide={handleClose}>
                                    <ModalHeader closeButton>
                                        <ModalTitle>Informasi Rekening</ModalTitle>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div className="mb-3">
                                            <label htmlFor="nomorHandphone" className="form-label">
                                                Total Harga yang perlu dibayar
                                            </label>
                                            <input type="text" className="form-control" id="nomorHandphone" placeholder="Rp 10.000.000" disabled />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="nomorHandphone" className="form-label">
                                                Nomor Rekening Bersama
                                            </label>
                                            <input type="text" className="form-control" id="nomorHandphone" placeholder="1111222233334444" disabled />
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                    <div className="right mb-lg-0 mb-2">
                        <h5>Harga Utuh</h5>
                        <h5>Free Ongkir</h5>
                        <h5>Biaya Administrasi</h5>
                        <h5>Harga Akhir</h5>
                    </div>
                    <div className="right">
                        <button type="submit" className="button-secondary">
                            Kirim Order
                        </button>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Checkout;
