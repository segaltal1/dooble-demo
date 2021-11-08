import { useEffect, useState } from "react";
import { Box, Modal } from "@material-ui/core";
import { databaseService } from "../services/database.service";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export const BasicModal = ({
    onSelectedCharcter,
    selectedCharcter }) => {

    const [episodes, setEpisodes] = useState([])

    const getEpisodes = async (firstUrl, lastUrl) => {
        const episodes = await databaseService.fetchEpisodes(firstUrl, lastUrl)
        setEpisodes(episodes)
    }

    useEffect(() => {
        if (selectedCharcter) {
            getEpisodes(selectedCharcter?.first, selectedCharcter?.last)
        }
    }, [selectedCharcter])

    return (
        <div>
            <Modal
                open={!!selectedCharcter}
                onClose={() => { onSelectedCharcter(null) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <section className="modal-data flex column   gap">
                        <img src={selectedCharcter?.image} alt={selectedCharcter?.name} />
                        <h2>{selectedCharcter?.name}</h2>
                        {episodes.length > 0 && <>
                            <span>First Episode: {episodes[0]}</span>
                            <span>Last Episode: {episodes[1]}</span>
                        </>}
                    </section>
                </Box>
            </Modal>
        </div >
    );
}