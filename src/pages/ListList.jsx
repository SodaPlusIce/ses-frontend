import React,{useState, useEffect} from "react"
import { List, Skeleton, Pagination,Button, message } from 'antd';
import { ArticleListApi, ArticelDelApi } from '../request/api';
import moment from "moment";
export default function ListList() {

    const[list, setList] = useState([])
    const[total, setTotal] = useState(0)
    const[current, setCurrent] = useState(1)
    const[pageSize, setPageSize] = useState(10)
    const[update, setUpdate] = useState(1)

    const delFn = (id) => {
        ArticelDelApi({id}).then(res => {
            if(res.errCode === 0){
                message.success(res.message)
                setUpdate(update+1)
            }
        })
    }

    const getList = (num) => {
        ArticleListApi({
            num,
            count: pageSize
        }).then(res => {
            if (res.errCode === 0) {
                let { arr, total, num, count } = res.data
                setList(arr)
                setTotal(total)
                setCurrent(num)
                setPageSize(count)
            }
        })
    }
    useEffect(()=>{
        getList(current)
    },[])

    useEffect(() => {
        getList(current)
    }, [update])
    const onChange = (pages) => {
        getList(pages)
    }

    return (
        <div className="list_table" style={{padding: "20px"}}>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button type="primary" onClick={()=>{console.log(item.id)}}>编辑</Button>, 
                            <Button type="danger" onClick={delFn(item.id)}>删除</Button>]}
                    >
                        <Skeleton title={false} loading={false} active>
                            <List.Item.Meta
                                title={<a href="!#">{item.title}</a>}
                                description={item.subTitle}
                            />
                            <div>{moment(item.date).format("YY-MM-DD hh:mm:ss")}</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
            <Pagination 
            onChange={onChange} 
            total={total}
            current={current}
            pageSize={pageSize}
            style={{float: 'right', marginTop: "10px"}} />
        </div>
    )
}