function showContent(topic) {
    const mainContent = document.getElementById('main-content');
    let content = "";

    switch (topic) {
        case 'p1':
            content = `<embed src="/pdf_file/s1.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p2':
            content = `<embed src="/pdf_file/s2.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p3':
            content = `<embed src="/pdf_file/s3.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p4':
            content = `<embed src="/pdf_file/C2-S3.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p5':
            content = `<embed src="/pdf_file/C2-S4.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p6':
            content = `<embed src="/pdf_file/C3-S1.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p7':
            content = `<embed src="/pdf_file/C3-S2.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p8':
            content = `<embed src="/pdf_file/C3-S3.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p9':
            content = `<embed src="/pdf_file/C3-S5.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p10':
            content = `<embed src="/pdf_file/C4-S1.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p11':
            content = `<embed src="/pdf_file/C4-S2.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p12':
            content = `<embed src="/pdf_file/C4-S3.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p13':
            content = `<embed src="/pdf_file/C5-S2.pdf#toolbar=0" class="pdf-viewer">`;
            break;
        case 'p14':
            content = `<embed src="/pdf_file/C5-S3.pdf#toolbar=0" class="pdf-viewer">`;
            break;
    }

    mainContent.innerHTML = content;
}