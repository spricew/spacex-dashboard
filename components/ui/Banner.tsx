export default function Banner() {
    return (
        <div className="relative rounded-3xl -z-10 overflow-hidden">
            <picture className="absolute inset-0 w-full h-full">
                <img src="https://muyinteresante.okdiario.com/wp-content/uploads/sites/5/2024/07/09/668d54e1b6bfa-e1736353489521.png?w=800"
                    className="object-cover w-full h-full" />
            </picture>
        </div>
    );
}