<template>
    <div class="flex flex-col justify-center items-center" ref="skills">
        <div ref="draw" />
    </div>
</template>

<script>
import Matter from "matter-js"

export default {
    name: "skills",
    data() {
        return {
            skills: [
                { name: "Python", img_name: "python", percent: 1, level: "Proficient" },
                { name: "Java", img_name: "java", percent: 0.6, level: "Intermediate" },
                { name: "JavaScript", img_name: "javascript", percent: 1, level: "Proficient" },
                { name: "C#", img_name: "csharp", percent: 0.5 },
                { name: "C++", img_name: "cpp", percent: 1 },
                { name: "R", img_name: "r", percent: 0.5 },
                { name: "Html", img_name: "html", percent: 1 },
                { name: "CSS", img_name: "css", percent: 1 },
                { name: "Vue", img_name: "vue", percent: 1 },
                { name: "React", img_name: "react", percent: 1 },
                { name: "Nuxt", img_name: "nuxt", percent: 1, level: "Proficient" },
                { name: "MongoDB", img_name: "mongodb", percent: 1 },
                { name: "Nginx", img_name: "nginx", percent: 1 },
                { name: "Typescript", img_name: "typescript", percent: 0.5 },
                { name: "Graphql", img_name: "graphql", percent: 0.5 },
                { name: "NodeJS", img_name: "nodejs", percent: 0.5 },
                { name: "Ubuntu", img_name: "ubuntu", percent: 0.5 },
                { name: "Git", img_name: "git", percent: 0.5 },
                { name: "Docker", img_name: "docker", percent: 0.5 },
                { name: "Linux", img_name: "linux", percent: 0.5 },
            ],
            engine: null,
            render: null,
            runner: null,
            skill_width: 100,
            skill_height: 100,
            png_width_px: 256,
            png_height_px: 256,
            png_mobile_scale: 0.6,
            mobile: false,
            skill_gap_x: 25,
            skill_gap_y_initial: 10,
            start_x: 0,
            start_y: 10,
            width: 0.4 * window.innerWidth,
            height: 0.6 * window.innerHeight,
            right: null,
            left: null,
            ceiling: null,
            ground: null,
            previousWidth: null,
            gamma: 100
        }
    },
    methods: {
        createSkills() {
            let boxes = []
            let x = this.start_x
            let y = this.height / 2 + this.skill_gap_y_initial

            for (let skill of this.skills) {
                boxes.push(Matter.Bodies.rectangle(x, y, this.skill_width, this.skill_height, {
                    render: {
                        sprite: {
                            texture: `/skills/${skill.img_name.toLowerCase()}.png`,
                            xScale: this.skill_width / this.png_width_px,
                            yScale: this.skill_height / this.png_height_px
                        }
                    },
                    label: "skill"
                }))
                x += this.skill_width + this.skill_gap_x
                if (x > this.width) {
                    x = this.start_x
                    y -= 1
                }
            }

            return boxes
        },
        handle_resize(){
            console.log("Resized")
            this.resize()
            this.resizeRender()
        },
        resize() {
            this.width = 0.4 * window.innerWidth
            this.height = 0.6 * window.innerHeight
            this.checkMobileSize()
        },
        resizeRender(){
            this.render.bounds.max.x = this.width;
            this.render.bounds.max.y = this.height;
            this.render.options.width = this.width;
            this.render.options.height = this.height;
            this.render.canvas.width = this.width;
            this.render.canvas.height = this.height;
    
            let new_width = this.right.vertices[0].x - this.left.vertices[0].x
    
            Matter.Body.set(this.right, "position", { x: this.width + 10, y: this.height / 2 - 5 })
            Matter.Body.set(this.left, "position", { x: - 10, y: this.height / 2 - 5 })
            Matter.Body.scale(this.ground, new_width / this.width, 1)
            Matter.Body.scale(this.ceiling, new_width / this.width, 1)
    
            this.width = new_width
        },
        scaleSkills(xScale, yScale, xTextureScale, yTextureScale) {
            this.engine.world.bodies.forEach((body) => {
                if (body.label == "skill") {
                    Matter.Body.scale(body, xTextureScale, yTextureScale)
                    body.render.sprite.yScale = yScale
                    body.render.sprite.xScale = xScale
                }
            })
        },
        checkMobileSize() {
            if (this.width <= 400) {
                this.width = 400
                if (!this.mobile) {
                    this.mobile = true
                    this.scaleSkills(
                        (this.skill_width * this.png_mobile_scale) / this.png_width_px,
                        (this.skill_height * this.png_mobile_scale) / this.png_height_px,
                        this.png_mobile_scale,
                        this.png_mobile_scale
                    )
                }
            } else if (this.mobile) {
                this.mobile = false
                this.scaleSkills(
                    this.skill_width / this.png_width_px,
                    this.skill_height / this.png_width_px,
                    1 / this.png_mobile_scale,
                    1 / this.png_mobile_scale
                )
            }
        },
        handleOrientation(event) {
            console.log(event.gamma)
            this.gamma = event.gamma
        },
    },
    mounted() {
        // window.addEventListener("click", this.permission)
        // module aliases
        // var Engine = Matter.Engine,
        //     Render = Matter.Render,
        //     Runner = Matter.Runner,
        //     Bodies = Matter.Bodies,
        //     Composite = Matter.Composite,
        //     Mouse = Matter.Mouse,
        //     MouseConstraint = Matter.MouseConstraint
        window.addEventListener("resize", this.handle_resize)

        // create an engine
        this.engine = Matter.Engine.create();

        // Resize before setting renderer
        this.resize()

        // create a renderer
        this.render = Matter.Render.create({
            element: this.$refs['draw'],
            engine: this.engine,
            options: {
                width: this.width,
                height: this.height,
                wireframes: false,
                background: '#111'
            },
        });

        // create two boxes and a ground

        this.ground = Matter.Bodies.rectangle(this.width / 2, this.height, this.width, 60, { isStatic: true, label: "ground", fillStyle: 'red' });
        this.ceiling = Matter.Bodies.rectangle(this.width / 2, 0, this.width, 60, { isStatic: true, label: "ceiling" });
        this.left = Matter.Bodies.rectangle(-10, this.height / 2, 100, this.height, { isStatic: true, label: "left" });
        this.right = Matter.Bodies.rectangle(this.width + 10, this.height / 2, 100, this.height, { isStatic: true, label: "right" });

        var mouse = Matter.Mouse.create(this.$refs['draw'])
        var mConstraint = Matter.MouseConstraint.create(this.engine, {
            mouse
        })

        // add all of the bodies to the world
        Matter.Composite.add(this.engine.world, mConstraint)
        Matter.Composite.add(this.engine.world, [this.ground, this.left, this.right, this.ceiling].concat(this.createSkills()));

        // run the renderer
        Matter.Render.run(this.render);

        // create runner
        this.runner = Matter.Runner.create({
            isFixed: true
        });

        // run the engine
        Matter.Runner.run(this.runner, this.engine);

        if (this.mobile){
            this.scaleSkills(
                (this.skill_width * this.png_mobile_scale) / this.png_width_px,
                (this.skill_height * this.png_mobile_scale) / this.png_height_px,
                this.png_mobile_scale,
                this.png_mobile_scale
            )
        }

    },
}
</script>