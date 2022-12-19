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
            boxes: [],
            engine: null,
            triggeredAnimation: false,
            render: null,
            runner: null,
            skill_width: 100,
            skill_height: 100,
            png_width_px: 256,
            png_height_px: 256,
            png_mobile_scale: 0.6,
            png_tablet_scale: 0.8,
            mobile: false,
            tablet: false,
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
            prev: {
                width: null,
                height: null
            },
            gamma: 100
        }
    },
    methods: {
        createSkills() {
            let x = this.start_x
            let y = this.height / 2 + this.skill_gap_y_initial

            for (let skill of this.skills) {
                this.boxes.push(Matter.Bodies.rectangle(x, y, this.skill_width, this.skill_height, {
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

            return this.boxes
        },
        handle_resize(){
            // console.log(`w: ${0.4 * window.innerWidth}, h: ${0.6 * window.innerHeight}`)
            // console.log("Resized") 
            this.resize()
            this.resizeRender()
        },
        resize() {
            this.width = 0.4 * window.innerWidth
            this.height = 0.6 * window.innerHeight
            this.checkMobileSize()
            if (!this.prev.width && !this.prev.height) {
                this.prev.width = this.width
                this.prev.height = this.height
            }
        },
        resizeRender(){
            this.render.bounds.max.x = this.width;
            this.render.bounds.max.y = this.height;
            this.render.options.width = this.width;
            this.render.options.height = this.height;
            this.render.canvas.width = this.width;
            this.render.canvas.height = this.height;

    
            Matter.Body.set(this.ground, "position", { x: this.width / 2, y: this.height })
            Matter.Body.set(this.ceiling, "position", { x: this.width / 2, y: 0 })
            Matter.Body.scale(this.ground, this.width / this.prev.width, 1)
            Matter.Body.scale(this.ceiling, this.width / this.prev.width, 1)

            Matter.Body.scale(this.left, 1, this.height / this.prev.height)
            Matter.Body.scale(this.right, 1, this.height / this.prev.height)
            Matter.Body.set(this.right, "position", { x: this.width + 10, y: this.height })
            Matter.Body.set(this.left, "position", { x: - 10, y: this.height })

            // console.log("=====================")
            // if (this.width > this.prev.width) console.log("UPSIZED")
            // else console.log("DOWNSIZED")
            // console.log(`Previous Width: ${this.prev.width}, NOW: ${this.width}`)
            // console.log(`Previous Height: ${this.prev.height}, NOW: ${this.height}`)
            // console.log(`Area of left: ${this.left.area}`)
            // console.log(`Area of right: ${this.right.area}`)
            // console.log(`Area of top: ${this.ceiling.area}`)
            // console.log(`Area of down: ${this.ground.area}`)
    
            this.prev.width = this.width
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
            } else if (this.width > 400 && this.width <= 1600) {
                if (!this.tablet) {
                    this.tablet = true
                    this.scaleSkills(
                        (this.skill_width * this.png_tablet_scale) / this.png_width_px,
                        (this.skill_height * this.png_tablet_scale) / this.png_height_px,
                        this.png_tablet_scale,
                        this.png_tablet_scale
                    )
                }
            }else if (this.mobile) {
                this.mobile = false
                this.scaleSkills(
                    this.skill_width / this.png_width_px,
                    this.skill_height / this.png_width_px,
                    1 / this.png_mobile_scale,
                    1 / this.png_mobile_scale
                )
            }else if (this.tablet) {
                this.tablet = false
                this.scaleSkills(
                    this.skill_width / this.png_width_px,
                    this.skill_height / this.png_width_px,
                    1 / this.png_tablet_scale,
                    1 / this.png_tablet_scale
                )
            }
        },
        scrollTrigger(){
            this.$gsap.to(
                this.$refs['skills'], 
                { 
                    scrollTrigger: {
                        trigger: this.$refs['skills'],
                        markers: false,
                        start: "bottom-=20% bottom",
                        end: "bottom-=20% top",
                        onToggle: self => this.applyForce(self.isActive),
                    },
                },
            )
        },
        applyForce(active){
            if (active && !this.triggeredAnimation){
                this.boxes.forEach(box => {
                    Matter.Body.applyForce(box, box.position, {
                        x:  this.height/1500 * (Math.round(Math.random()) * 2 - 1),
                        y:  this.height/1500 * (Math.round(Math.random()) * 2 - 1),
                    })
                })
                this.triggeredAnimation = true
            }
        }
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
        this.scrollTrigger()
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
        this.left = Matter.Bodies.rectangle(-10, this.height / 2, 100, window.innerHeight * 20, { isStatic: true, label: "left" });
        this.right = Matter.Bodies.rectangle(this.width + 10, this.height / 2, 100, window.innerHeight * 20, { isStatic: true, label: "right" });

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
        } else if (this.tablet) {
            this.scaleSkills(
                (this.skill_width * this.png_tablet_scale) / this.png_width_px,
                (this.skill_height * this.png_tablet_scale) / this.png_height_px,
                this.png_tablet_scale,
                this.png_tablet_scale
            )
        }

    },
}
</script>