/**
 * Created by xulei2 on 2017/8/9.
 */
KindEditor.ready(function (K) {
    window.editor = K.create('textarea[name=body]', {
        width: '80',
        height: '20',
        uploadJson: '/admin/upload/kindeditor',
    });
});
