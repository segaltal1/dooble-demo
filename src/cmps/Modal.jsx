import { Box, Modal, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { databaseService } from "../services/database.service";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const BasicModal = ({
    isOpen,
    onToggleModal,
    onSelectedCharcter,
    selectedCharcter }) => {

    // const { name, image, first, last } = selectedCharcter
    const getEpisode = async (firstUrl, lastUrl) => {
        const res = await databaseService.fetchEpisodes(firstUrl, lastUrl)
        console.log("🚀 ~ getEpisode ~ res", res)
        return 'test'
    }

    useEffect(() => {
        getEpisode(selectedCharcter?.first, selectedCharcter?.last)
    }, [])
    return (
        <div>
            <Modal
                open={!!selectedCharcter}
                onClose={() => { onSelectedCharcter(null) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <img src={selectedCharcter?.image} alt={selectedCharcter?.name} />
                    <h2>{selectedCharcter?.name}</h2>
                    <span>First Episode:{getEpisode(selectedCharcter?.first)}</span>
                    <span>Last Episode:{getEpisode(selectedCharcter?.last)}</span>
                </Box>
            </Modal>
        </div>
    );
}