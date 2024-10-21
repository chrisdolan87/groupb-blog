// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = [
        {
            id: 1,
            title: 'First Blog Post',            
            content: 'Mi mus magnis at ad nisl commodo praesent felis torquent. Primis a sem cubilia elementum eros sagittis primis dictumst sociosqu feugiat ad sagittis ac curae; neque tempor. Porttitor. Interdum risus sapien metus hymenaeos ante. Tempor magnis dictumst ligula volutpat orci imperdiet lobortis risus nisi purus tellus. Tincidunt.Nam penatibus quis mus. Torquent. Ultrices lacus ipsum sapien porttitor. Venenatis cursus habitant. Molestie quis adipiscing. Volutpat auctor euismod fusce, consequat eget, ac lobortis ac a mattis mattis ultricies at ut. Purus. Rutrum hendrerit ultrices ultricies praesent imperdiet. Viverra. Non nostra, vitae nonummy leo felis, penatibus enim. Tellus curabitur imperdiet nonummy Hendrerit parturient quis tellus. Eu euismod cras habitasse.',
            image: '/images/image1.jpg'
        },
        {
            id: 2,
            title: 'Second Blog Post',
            content: 'Blandit ornare, senectus malesuada augue est iaculis cubilia quis torquent sed. Quisque aenean, hymenaeos accumsan aliquam, curabitur, odio aliquam feugiat erat pretium. Mattis auctor bibendum morbi placerat arcu dictumst magna non viverra sagittis. Elit proin justo aenean morbi integer tempus platea. Placerat. Donec tempor Turpis, class nonummy, varius lacinia. Curabitur commodo hac augue quisque quam, porttitor etiam. Fringilla. Condimentum arcu leo ornare cras et fames. Tincidunt egestas rutrum. Eu. Maecenas sociis in pharetra. Parturient Risus condimentum egestas cras. Turpis nibh lacinia feugiat et bibendum fames magna laoreet. Porttitor enim viverra pede magnis suscipit curae; montes scelerisque ligula primis platea risus. Blandit nunc vestibulum aenean.',
            image: '/images/image2.jpg'
        },
        {
            id: 3,
            title: 'Third Blog Post',
            content: 'Porttitor lorem quisque. Tellus porttitor mus purus tempus nibh ut diam phasellus sociis feugiat semper. Netus Potenti fusce massa. Montes scelerisque augue sodales habitant aenean accumsan Magna morbi quisque neque pede dictum mus sapien laoreet. Nisl. Sit libero rutrum ante sollicitudin parturient justo. Sollicitudin morbi libero viverra luctus. Ante dignissim diam pretium ligula neque sem vulputate ullamcorper dis convallis accumsan. Nullam non. Tellus luctus ridiculus aenean, fringilla. Taciti ullamcorper inceptos donec est ridiculus sollicitudin dolor fermentum penatibus ante lacus suscipit torquent, a interdum, morbi phasellus ad consequat feugiat porttitor. Penatibus cras faucibus at.Quis tortor at conubia egestas diam mattis vehicula commodo viverra nisi nulla mi ad, urna dui at.',
            image: '/images/image3.jpg'
        },
    ];

    return NextResponse.json(posts);
}
