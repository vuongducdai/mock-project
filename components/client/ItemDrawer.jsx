import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ItemDrawer({ title, renderFuntion }) {
    return (
        <Typography component='div'>
            <Accordion className="shadow-none border-b">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='min-h-4  '
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {renderFuntion()}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Typography>
    )
}
