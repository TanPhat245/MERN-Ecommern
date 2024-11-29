import moongoose from 'mongoose'

const orderSchema = new moongoose.Schema({
    userId: {type: String, required: true},
    items: {type: Array, required: true},
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: { type: String, required: true, default:'Đã đặt hàng'},
    paymentMethod: {type: String, required: true},
    payment: {type: Boolean, required: true, default: false},
    date: {type: Number, required: true}
})

const orderModel = moongoose.models.order || moongoose.model('order', orderSchema)
export default orderModel;