tinymce.init(
    {
    selector: 'textarea.tinymce',
    menubar: false,
    inline: true,
    plugins: [
        'link',
        'lists',
        'powerpaste',
        'autolink',
        'tinymcespellchecker'
    ],
    toolbar: [
        'undo redo | bold italic underline | fontselect fontsizeselect',
        'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
    ],
    valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
    valid_styles: {
        '*': 'font-size,font-family,color,text-decoration,text-align'
    },
    powerpaste_word_import: 'clean',
    powerpaste_html_import: 'clean',
    }
);