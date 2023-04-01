export interface DatabaseWrapper { 
    findAll(): Promise<any>
    insertOne(doc: any): Promise<any> 
}
