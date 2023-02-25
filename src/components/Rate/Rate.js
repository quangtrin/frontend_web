import classNames from 'classnames/bind';
import { useState } from 'react';
import { Modal } from 'antd';
import ButtonHome from "../Button/ButtonHome/ButtonHome"
import { Rate as RateAntd } from 'antd';
import { useNavigate } from "react-router-dom";
import styles from './Rate.module.scss';
import axios from 'axios';
import Swal from "sweetalert2";


const cx = classNames.bind(styles);

const Rate = ({ user, film }) => {
    const navigate = useNavigate();
    const [isRateDialogOpen, setIsRateDialogOpen] = useState(false);
    const [currentRate, setCurrentRate] = useState();
    const handleButtonSumbit = async () => {
        try {
            const req = await axios.post("https://backend-test-production-3338.up.railway.app/api/rate", {
                filmID: film.filmID,
                userID: user.userId,
                rate: currentRate,
            })
            if (req.data) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Đã ghi nhận đánh giá",
                    confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
                }).then((result) => {
                    if (result.isConfirmed) navigate(0);
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "error",
                text: "Đã xảy ra lỗi, vui lòng thử lại",
                confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
            });
            console.log(error);
        }
        setCurrentRate(0);
        setIsRateDialogOpen(false)
    }
    const handleButtonOnclick = () => {
        if (user?.userId) {
            setIsRateDialogOpen(true);
        }
        else {
            Swal.fire({
                title: "Bạn Cần Đăng Nhập Để đánh giá!",
                icon: "warning",
                showCloseButton: true,
            });
        }
    }
    const closeDialog = () => {
        setCurrentRate(0);
        setIsRateDialogOpen(false)
    }
    return (
        <>
            <ButtonHome text={"Đánh giá"} onClick={handleButtonOnclick} href="#"></ButtonHome>
            <Modal title="Đánh giá" open={isRateDialogOpen} onCancel={closeDialog} onOk={handleButtonSumbit}>
                <RateAntd
                    count={10}
                    defaultValue={currentRate}
                    value={currentRate}
                    onChange={(value) => { setCurrentRate(value); }}
                />
            </Modal>
        </>
    )
}
export default Rate;