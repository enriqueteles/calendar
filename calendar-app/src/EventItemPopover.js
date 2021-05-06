import React, { useState, useEffect } from 'react';
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import { Button, Input, DatePicker, TimePicker } from 'antd';
import { format } from 'date-fns';
import { enUS, pt } from 'date-fns/locale';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import axios from 'axios';


import './EventItemPopover.css';

function EventItemPopover(
    {
        eventItem,
        refresh,
        setRefresh
    }) {
        
    useEffect(() => {
        if(eventItem) {
            setId(eventItem.id);
            setName(eventItem.name);
            setStartDate(new Date(eventItem.startDate));
            setEndDate(new Date(eventItem.endDate));
            setDescription(eventItem.description);
            // setColorTag(eventItem.colorTag);
            setTagId(eventItem.tagId);

            setMode("View");
        } else {
            setId(null);
            setName(null);
            setStartDate(new Date());
            setEndDate(new Date());
            setDescription(null);
            setColorTag('#04325A');
            setTagId(null);

            setMode("Add");
            console.log(startDate);
        }

        if(!colorTag) setColorTag('#04325A');
        console.log(colorTag)
    }, [eventItem]);

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState(null);
    const [colorTag, setColorTag] = useState('#04325A');
    const [tagId, setTagId] = useState(null);

    const [mode, setMode] = useState("Add");
        
    const dateFormat = 'YYYY/MM/DD';

    const DatePicker = generatePicker(dateFnsGenerateConfig);

    const editMode = async () => {

        if(mode === "Edit") {
            editEvent();
            setMode("View");
        }
        else if(mode === "View") setMode("Edit");
    }

    async function addEvent() {
        await axios.post('/events', {
            startDate,
            endDate,
            name,
            description
        })
			.then(res => {
                setId(null);
                setName(null);
                setStartDate(new Date());
                setEndDate(new Date());
                setDescription(null);
                setColorTag('#04325A');
                setTagId(null);
                
				setRefresh(true);
			})
			.catch(err => {
				console.log(err);
			})
        return 0;
      }

    async function editEvent() {
        await axios.patch(`/events/${id}`, {
            startDate,
            endDate,
            name,
            description
        })
			.then(res => {
				setRefresh(true);
			})
			.catch(err => {
				console.log(err);
			})
        return 0;
      }

    async function deleteEvent() {
        await axios.delete(`/events/${id}`)
			.then(res => {
                setId(null);
                setName(null);
                setStartDate(new Date());
                setEndDate(new Date());
                setDescription(null);
                setColorTag('#04325A');
                setTagId(null);
                
				setRefresh(true);
			})
			.catch(err => {
				console.log(err);
			})
        return 0;
      }

    return (
        <div className="eventItemPopover">
            <Row type="flex" align="middle">
                <Col span={2}>
                    <div className="eventItemPopover__dot" style={{backgroundColor: colorTag}} />
                </Col>
                <Col span={22} className="eventItemPopover__text">
                    {mode != "View" ? (
                        <Input placeholder="Event name" value={name} onChange={e => {setName(e.target.value)}} />
                    ) : (
                        <span className="eventItemPopover__title" title={name}>{name}</span>
                    )}
                </Col>
            </Row>
            <Row type="flex" align="middle">
                <Col span={2}>
                    <div />
                </Col>
                <Col span={22}>
                    {mode == "View" ? (
                        <>
                            <span className="eventItemPopover__spanBold" style={{color: colorTag}}>{format(new Date(startDate), 'HH:mm', { locale: enUS })}</span>
                            <span className="eventItemPopover__spanRegular" > {format(new Date(startDate), 'MMM dd', { locale: enUS })}</span>
                            <span className="eventItemPopover__title" > - </span>
                            <span className="eventItemPopover__spanBold" style={{color: colorTag}}>{format(new Date(endDate), 'HH:mm', { locale: enUS })}</span>
                            <span className="eventItemPopover__spanRegular" > {format(new Date(endDate), 'MMM dd', { locale: enUS })}</span>
                        </>
                    ) : (
                        <>
                            <DatePicker defaultValue={startDate} onChange={(date, dateString) => {setStartDate(date)}} format={"YYYY/MM/DD HH:mm"} style={{ width: 160 }} />
                            <span className="eventItemPopover__title" > - </span>
                            <DatePicker defaultValue={endDate} onChange={(date, dateString) => {setEndDate(date)}} format={"YYYY/MM/DD HH:mm"} style={{ width: 160 }} />
                        </>
                    )}
                    
                </Col>
            </Row>
            <Row type="flex" align="middle">
                <Col span={2}>
                    <div />
                </Col>
                <Col span={22}>
                   {mode != "View" ? (
                        <Input style={{height: "60px"}} placeholder="Event description" value={description} onChange={e => {setDescription(e.target.value)}} />
                    ) : (
                        <>
                            <span className="eventItemPopover__text" >{description}</span>
                        </>
                    )}
                    
                </Col>
            </Row>
            <Row type="flex" align="middle">
                <Col span={2}>
                    <div />
                </Col>
                <Col span={22} className="eventItemPopover__right">
                    {mode === "Edit" ? (
                        <>
                            <Button type="primary" size="default" className="eventItemPopover__editBtn" onClick={() => {editMode()}} >Editar</Button>
                        </>
                    ) : (<>
                        {mode === "Add" ? (
                            <Button type="primary" size="default" className="eventItemPopover__addBtn" onClick={() => {addEvent()}} >Add</Button>
                        ) : (
                            <>
                                <Button type="primary" size="default" danger onClick={() => {deleteEvent()}} >Deletar</Button>
                                <Button type="primary" size="default" onClick={() => {editMode()}} >Editar</Button>
                            </>
                        )} 
                    </>)}
                    
                </Col>
            </Row>
        </div>
    );
}

export default EventItemPopover;
